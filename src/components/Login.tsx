"use client";
import React, { useRef } from "react";
import InputBox from "./InputBox";
import { Button } from "./Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const router = useRouter();
  const userName = useRef("");
  const pass = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (!res?.error) {
      router.push(props.callbackUrl ?? "http://localhost:3000");
    }
  };
  return (
    <div className={props.className}>
      <div className="bg-gradient-to-b  from-slate-50 to-slate-200 p-2 text-center text-slate-600">
        Login Form
      </div>
      {!!props.error && (
        <p className="bg-red-100 text-red-600 text-center p-2">
          Authentication Failed
        </p>
      )}
      <form onSubmit={onSubmit} className="p-2 flex flex-col gap-3">
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
