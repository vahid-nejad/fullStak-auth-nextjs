"use client";
import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lableText?: string;
  error?: string;
  children?: React.ReactNode;
  number?: boolean;
}

export const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      className,
      children,
      lableText: lableText,
      type = "text",
      error,
      number,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        {lableText && (
          <label
            className={`block text-slate-600  mb-2 text-xs lg:text-sm xl:text-base `}
            htmlFor="txt"
          >
            {lableText}
          </label>
        )}
        <div className="flex items-stretch relative ">
          <input
            id="txt"
            className={`border  disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-slate-50 focus:shadow focus:shadow-blue-500 
              ${
                error ? " border-red-500   animate-shake" : "border-slate-400"
              } ${children ? "rounded-r-md" : "rounded-md"}`}
            {...props}
            ref={ref}
            type={type}
            disabled={disabled}
          ></input>

          <div className="flex">{children}</div>
        </div>
        {error && (
          <p className="text-red-600 text-right animate-shake">{error}</p>
        )}
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
