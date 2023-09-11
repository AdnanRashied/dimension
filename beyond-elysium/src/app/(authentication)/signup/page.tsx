"use client"
import React, { useState } from 'react';
import { FormField } from '@/app/components/Form-Field';

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-xl w-96">
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
            required/>
          <button
            type="submit"
            className="px-4 py-2 text-white rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >Signup
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
