"use client";
import React, { FormEventHandler, useRef } from "react";
import { Button } from "./Button";
import InputBox from "./InputBox";
import Link from "next/link";

import { signIn } from "next-auth/react";

interface Props {
  className?: string;
  message?: string;

  callbackUrl?: string;
}
const Login = (props: Props) => {
  const userName = useRef("");
  const pass = useRef("");
  const loginRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn(
      "credentials",

      {
        redirect: true,
        callbackUrl: props.callbackUrl ?? "http://localhost:3000",
        username: userName.current,
        password: pass.current,
      }
    );
  };

  return (
    <div className={props.className}>
      <div className="bg-gradient-to-b from-slate-50 to-slate-200 p-2 text-center text-slate-600">
        Login Form
      </div>
      {!!props.message && <p className="bg-red-200 p-2 text-red-800">{props.message}</p>}
      <form onSubmit={loginRequest} className="p-2 flex flex-col gap-3">
        <InputBox
          name="username"
          labelText="User Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <InputBox
          name="password"
          type="password"
          labelText="Password"
          onChange={(e) => (pass.current = e.target.value)}
        />
        <div className="flex items-center justify-center mt-2 gap-2">
          <Button type="submit" className="w-28">
            Sign In
          </Button>
          <Link
            //not defined yet
            href={props.callbackUrl ?? "/"}
            className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
