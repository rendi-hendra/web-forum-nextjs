"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Register() {
  const inputNameRef = useRef<null | any>();
  const inputEmailRef = useRef<null | any>();
  const inputPasswordRef = useRef<null | any>();
  const inputPassword_confirmationRef = useRef<null | any>();
  const router = useRouter();

  const btnSubmit = (url: string) => {
    const name = inputNameRef.current.value;
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    const password_confirmation = inputPassword_confirmationRef.current.value;

    axios({
      method: "post",
      url: "http://127.0.0.1:3333/api/auth/register",
      data: {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    })
      .then(async (res) => {
        inputNameRef.current.value = "";
        inputEmailRef.current.value = "";
        inputPasswordRef.current.value = "";
        inputPassword_confirmationRef.current.value = "";
        router.push(url);
      })
      .catch((error) => console.log(error.response.data.errors[0].message));
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
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Name"
          ref={inputNameRef}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="email"
          placeholder="Email Address"
          ref={inputEmailRef}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          ref={inputPasswordRef}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password Confirmation"
          ref={inputPassword_confirmationRef}
        />
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={() => btnSubmit("/login")}
          >
            Register
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link
            href="login"
            className="text-red-600 hover:underline hover:underline-offset-4"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
