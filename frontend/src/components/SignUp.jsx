import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(input);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/login");
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
        <h1 className="text-2xl font-bold uppercase text-gray-800 mb-3">
          Sign Up
        </h1>
        <input
          onChange={changeHandler}
          value={input.fullname}
          name="fullname"
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-lg p-1 px-2"
        />
        <input
          onChange={changeHandler}
          value={input.email}
          name="email"
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-1 px-2"
        />
        <input
          onChange={changeHandler}
          value={input.password}
          name="password"
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-1 px-2"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-gray-800 text-white mt-2"
        >
          Sign Up
        </button>
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to={"/login"} className="text-gray-900 font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
