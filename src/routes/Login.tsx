import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setError(`${error}`);
      console.log(error);
    }
  };

  return (
    <section className="login h-[100vh] flex justify-center items-center bg-sky-200">
      <div className="bg-white rounded-lg flex flex-col items-center gap-y-4 w-full sm:w-[60vw] lg:w-[35vw] py-6 px-2">
        <h1 className="font-bold text-4xl text-gray-700">react-chat</h1>
        <span className="font-medium text-gray-700">Login</span>
        <form
          action=""
          className="flex flex-col gap-y-6 w-full items-center relative"
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <input
            type="email"
            placeholder="Email"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address."
              }
            })}></input>
          {errors.email && (
            <p className="absolute top-10 left-1/2 -translate-x-1/2 text-red-500 text-xs">
              {errors.email.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
            {...register("password", {
              required: "Password is required."
            })}></input>
          {errors.password && (
            <p className="absolute top-24 left-1/2 -translate-x-1/2 text-red-500 text-xs">
              {errors.password.message}
            </p>
          )}

          <button className="w-full max-w-[300px] rounded bg-sky-400 hover:bg-sky-500 min-h-[35px] text-white font-medium transition-all duration-200 flex items-center justify-center gap-x-2">
            {isLoading && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            Sign in
          </button>
          {error && <div>{error}</div>}
        </form>
        <div className="flex flex-col items-center">
          <span className=" font-medium text-gray-700">
            You don't have an account?
            <Link to="/signup" className="text-sky-400 font-medium ml-2">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
