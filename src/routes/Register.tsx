import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth/cordova";
import { doc, setDoc } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  displayName: string;
  email: string;
  password: string;
  files: FileList;
};

const Register = () => {
  const [error, setError] = useState(false);
  const [file, setFile] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<FormData> = async ({
    displayName,
    email,
    password,
    files
  }) => {
    const avatar = files[0];
    try {
      const responce = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      await uploadBytesResumable(storageRef, avatar).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(responce.user, {
              displayName,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "users", responce.user.uid), {
              uid: responce.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });
            // await setDoc(doc(db, "userChats", responce.user.uid), {

            // })
            console.log("Success!");
          } catch (error) {
            console.log(error);
          }
        });
      });
    } catch {
      setError(true);
    }
  };
  // TODO: add validation to all inputs!
  return (
    <section className="register h-[100vh] flex justify-center items-center bg-sky-200">
      <div className="bg-white rounded-lg flex flex-col items-center gap-y-4 w-full sm:w-[60vw] lg:w-[35vw] py-6 px-2">
        <h1 className="font-bold text-4xl text-gray-700">react-chat</h1>
        <span className="font-medium text-gray-700">Register</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-6 w-full items-center relative"
          noValidate>
          <input
            type="text"
            {...register("displayName", {
              required: "Display name is required.",
              minLength: {
                value: 3,
                message: "Display name must have at least 3 characters."
              }
            })}
            placeholder="Display name"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          {errors.displayName && (
            <p className="absolute top-10 left-1/2 -translate-x-1/2 text-red-500 text-xs">
              {errors.displayName.message}
            </p>
          )}
          <input
            type="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address."
              }
            })}
            placeholder="Email"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500 relative"></input>
          {errors.email && (
            <p className="absolute top-[6.25rem] left-1/2 -translate-x-1/2 text-red-500 text-xs">
              {errors.email.message}
            </p>
          )}
          <input
            type="password"
            {...register("password", {
              required: "Password is required."
            })}
            placeholder="Password"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          {errors.password && (
            <p className="absolute top-40 left-1/2 -translate-x-1/2 text-red-500 text-xs">
              {errors.password.message}
            </p>
          )}
          <input
            type="file"
            id="file"
            {...register("files")}
            className=" hidden mt-4"
            onChange={() => setFile(true)}
          />
          <label
            htmlFor="file"
            className="px-2 flex items-center gap-2 cursor-pointer mt-4">
            <MdOutlineAddPhotoAlternate size="2.5em" className="text-sky-400" />
            <span className="text-sm text-sky-400 font-medium">
              {file ? "Avatar added." : "Add an avatar."}
            </span>
          </label>
          <button className="w-full max-w-[300px] rounded bg-sky-400 hover:bg-sky-500 min-h-[35px] text-white font-medium transition-all duration-200">
            Sign up
          </button>
          {error && <div>Something went wrong</div>}
        </form>
        <div className="flex flex-col items-center">
          <span className=" font-medium text-gray-700">
            You do have an account?
            <a href="" className="text-sky-400 font-medium ml-2">
              Login
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;
