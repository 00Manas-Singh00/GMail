import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen mt-20 rounded-md">
      <form action="" className="flex flex-col gap-3 bg-white p-4 w-[20%]">
        <h1 className="text-2xl font-bold uppercase text-gray-800 mb-2">
          LogIn
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-1 px-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-1 px-2"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-blue-600 text-white mt-2"
        >
          Login
        </button>
        <p className="text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to={"/login"} className="text-gray-900 font-semibold">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
