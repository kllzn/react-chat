import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const Register = () => {
  return (
    <section className="register h-[100vh] flex justify-center items-center bg-sky-200">
      <div className="bg-white rounded-lg flex flex-col items-center gap-y-4 w-full sm:w-[60vw] lg:w-[35vw] py-6 px-2">
        <h1 className="font-bold text-4xl text-gray-700">react-chat</h1>
        <span className="font-medium text-gray-700">Register</span>
        <form action="" className="flex flex-col gap-y-6 w-full items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          <input
            type="email"
            placeholder="Email"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          <input
            type="password"
            placeholder="Password"
            className="w-[90%] border-b-2 max-w-[300px] px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"></input>
          <input type="file" id="file" className=" hidden" />
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
