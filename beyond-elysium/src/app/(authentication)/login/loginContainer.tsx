import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LoginPageBackground from "@styles/LoginPageBackground.module.scss";
import { FormField } from "@components/Form-Field";

interface LoginContainerBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  value: { email: string; password: string };
  emailError?: string;
  passwordError?: string;
}

export const LoginContainerBox = ({
  value,
  onChange,
  onSubmit,
  emailError,
  passwordError,
}: LoginContainerBoxProps) => {
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setDisplayError(true);
      const errorTimeout = setTimeout(() => {
        setDisplayError(false);
      }, 2000);
      return () => clearTimeout(errorTimeout);
    } else {
      setDisplayError(false);
    }
  }, [emailError, passwordError]);

  const errorImage = "/error.jpg"; 
  const defaultImage = "/giphy.gif"; 

  const imageUrl = displayError ? errorImage : defaultImage;
  
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black absolute flex items-center overflow-hidden place-content-center inset-0 no-rotate">
        <div className={LoginPageBackground.gradient} />
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="p-10 bg-black bg-opacity-25 rounded-lg shadow-lg backdrop-filter backdrop-blur-xl w-96">
          <form className="flex flex-col items-center space-y-3 md:space-y-3" onSubmit={onSubmit}>
            <Image
              src={imageUrl}
              alt="Vercel Logo"
              className="rounded-full"
              width={200}
              height={200}
              priority
            />
            <FormField
              htmlFor="email"
              value={value.email}
              onChange={onChange}
              type="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}|[a-zA-Z0-9._%+-]{6,}"
              required
              placeHolder="Enter Email Address"
              size={30}
              autoComplete={"email"}
              email={''}
              password={''}
            />
            <FormField
              htmlFor="password"
              value={value.password}
              onChange={onChange}
              type="password"
              placeHolder="Enter Password"
              required
              autoComplete="current-password"
              email={''}
              password={''}
            />
            <button
              type="submit"
              className="relative h-8 w-full space-y-7 md:space-y-5 before:border-green-300 before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:border-blue-300 before:transition-all before:duration-300 before:border-blue-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:border-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] text-sm font-semibold text-gray-900 dark:text-white"
            >
              Login
            </button>
          </form>
          <div className="p-10"></div>
          <button className="absolute w-24 h-7 text-sm font-semibold text-gray-900 right-5 dark:text-white before:border-green-300 before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:border-blue-300 before:transition-all before:duration-300 before:border-blue-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:border-blue-400 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] text-sm text-gray-900 dark:text-white">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};
