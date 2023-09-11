"use client"
import Link from "next/link";
import React, { useState } from 'react';
import { FormField } from '@/app/components/Form-Field';
import LoginPageBackground from "@styles/LoginPageBackground.module.scss";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formDataLowercased = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email.toLowerCase(),
      password: formData.password,
    };
  
    if (formDataLowercased.password.length < 6) {
      console.log('Password must be at least 6 characters long');
      return;
    }
  
    try {
      const response = await fetch('/api/controller/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataLowercased),
      });
  
      if (response.status === 201) {
        console.log('Signup successful');
      } else {
        const data = await response.json();
        console.log('Signup failed', data);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black absolute flex items-center overflow-hidden place-content-center inset-0 no-rotate">
        <div className={LoginPageBackground.gradient} />
     </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-10 bg-black bg-opacity-25 rounded-lg shadow-lg backdrop-filter backdrop-blur-xl w-96">
          <h2 className="mb-4 text-2xl">Signup</h2>
            <form onSubmit={handleSubmit}>
              <FormField
                htmlFor="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <FormField
                htmlFor="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormField
                htmlFor="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                minlength={6}
                required
              />
             <div className="p-4"></div>
              <button 
                className="relative h-8 w-full space-y-7 md:space-y-5 before:border-green-300
                 before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 
                 before:border-b before:border-r before:border-blue-300 before:transition-all 
                 before:duration-300 before:border-blue-300 before:ease-in-out after:absolute 
                 after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l
               after:border-blue-400 after:transition-all after:duration-300 after:ease-in-out
                 hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)]
                 hover:after:w-[calc(100%+16px)] text-sm font-semibold text-gray-900 dark:text-white">
                Sign Up
              </button>
              <div className="p-4"></div>
            <Link href="/login">
              <button 
                  className="relative h-8 w-full space-y-7 md:space-y-5 before:border-green-300
                  before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 
                  before:border-b before:border-r before:border-green-300 before:transition-all 
                  before:duration-300  before:ease-in-out after:absolute 
                  after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l
                  after:border-green-400 after:transition-all after:duration-300 after:ease-in-out
                  hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)]
                  hover:after:w-[calc(100%+16px)] text-sm font-semibold text-gray-900 dark:text-white"           
                  >
                Have an account? Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
};
export default SignupPage;
