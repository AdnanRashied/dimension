"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { LoginContainerBox } from "@authentication/login/loginContainer";

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [loginError, setLoginError] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setLoginError('');
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const formDataLowercased = {
      email: formData.email.toLowerCase(),
      password: formData.password,
    };

    try {
      const response = await fetch('api/controller/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataLowercased),
      });
  
      if (response.status === 200) {
        console.log('Login successful');
      } else {
        console.log('Login failed');
        setLoginError('Invalid email or password. Please try again.');
        setFormData({ email: '', password: '' }); 
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred during login. Please try again later.'); 
    }
  };

  return (
    <LoginContainerBox
      value={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      emailError={loginError}
    />
  );
};

export default LoginPage;
