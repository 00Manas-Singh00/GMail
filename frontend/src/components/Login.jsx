import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success(error.response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen mt-20 rounded-md">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-3 bg-white p-4 w-[20%]"
      >
        <h1 className="text-2xl font-bold uppercase text-gray-800 mb-2">
          LogIn
        </h1>
        <input
          value={input.email}
          name="email"
          onChange={changeHandler}
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-1 px-2"
        />
        <input
          value={input.password}
          name="password"
          onChange={changeHandler}
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
