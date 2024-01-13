"use client";

import axios from "axios";
import Link from "next/link";
import { auth, create } from "../actions";

export default function Login() {
  const inputValue = (e: any) => {
    e.preventDefault();
    const getValue = e.target;
    const email = getValue[0].value;
    const password = getValue[1].value;

    axios({
      method: "post",
      url: "http://127.0.0.1:3333/api/auth/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        create(res.data.token);
        auth("true");
      })
      .catch((error) => console.log(error.response.data.message));
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <form onSubmit={inputValue}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <Link
              href="register"
              className="text-red-600 hover:underline hover:underline-offset-4"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
