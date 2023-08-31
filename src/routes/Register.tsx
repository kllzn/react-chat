import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth/cordova";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { target } = e as unknown as {
      target: {
        displayName: HTMLInputElement;
        email: HTMLInputElement;
        password: HTMLInputElement;
        avatar: HTMLInputElement;
      };
    };
    const displayName = target.displayName.value;
    const email = target.email.value;
    const password = target.password.value;
    const avatar = target.avatar.files![0];
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
          } catch (error) {
            console.log(error);
          }
        });
      });
    } catch {
      setError(true);
    }
  };
  return (
    <section className="register h-[100vh] flex justify-center items-center bg-sky-200">
      <div className="bg-white rounded-lg flex flex-col items-center gap-y-4 w-full sm:w-[60vw] lg:w-[35vw] py-6 px-2">
        <h1 className="font-bold text-4xl text-gray-700">react-chat</h1>
        <span className="font-medium text-gray-700">Register</span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full items-center">
          <input
            type="text"
            name="displayName"
            placeholder="Display name"
            minLength={3}
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          <input type="file" id="file" name="avatar" className=" hidden" />
          <label
            htmlFor="file"
            className="px-2 flex items-center gap-2 cursor-pointer">
            <MdOutlineAddPhotoAlternate size="2.5em" className="text-sky-400" />
            <span className="text-sm text-sky-400 font-medium">
              Add an avatar
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
