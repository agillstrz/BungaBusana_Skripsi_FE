import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
export default function Login({ transition, setLogin }) {
  let navigate = useNavigate();
  return (
    <motion.div
      variants={transition}
      initial={transition.initial}
      animate={transition.animate}
      transition={transition.transition}
      exit={transition.exit}
      className="lg:w-1/2 w-full gap-y-4 flex flex-col lg:px-28 lg:py-10 justify-center items-center"
    >
      <h1 className="text-4xl font-semibold tracking-widest">Login!</h1>

      <Form />
      {/* <div className="rounded-lg cursor-pointer hover:shadow-lg translinear w-[20rem] h-10 border bg-white flex justify-center items-center gap-x-2">
        <FcGoogle /> Sign in with Google
      </div> */}
      <div className="flex  justify-center items-end w-full text-gray-500 text-sm">
        <p>
          Dont have account?{" "}
          <span
            onClick={() => setLogin(false)}
            className="text-primary hover:text-secondary  hover:underline cursor-pointer font-medium"
          >
            Register here
          </span>
        </p>
      </div>
      <p className="text-gray-500  text-sm">
        Kembali ke halaman{" "}
        <span
          onClick={() => navigate("/")}
          className="text-primary hover:text-secondary hover:underline cursor-pointer font-medium"
        >
          Home
        </span>
      </p>
    </motion.div>
  );
}
