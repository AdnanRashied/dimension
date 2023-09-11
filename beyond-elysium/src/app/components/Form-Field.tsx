"use client"
import { CSSProperties, useEffect, useState } from "react";

interface FormFieldProps {
    htmlFor: string;
    email?: string;
    password?: string; 
    firstName?:string;
    lastName?:string;
    label?: string;
    type?: string;
    value?: any;
    onChange?: (...args:any ) => any;
    error?: string;
    pattern?:string;
    required?: any;
    minlength?: number;
    size?: number;
    style?: CSSProperties | undefined;
    placeHolder?: string;
    autoComplete?: string;
}

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const validateEmail = (email: string): string | null => {
    if (!emailRegex.test(email)) {
        return "Invalid email address";
    }
    return null;
};
export const FormField = ({
    htmlFor,
    firstName,
    lastName,
    label,
    type = "text",
    value,
    onChange = () => {},
    error = "",
    pattern,
    required,
    minlength,
    size,
    placeHolder,
    style,
    autoComplete,
  }: FormFieldProps) => {
    const [errorText, setErrorText] = useState("");
    const [inputStyles, setInputStyles] = useState({});
   
    return (
    <>
        <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}
        </label>
        <input
            onChange={(e) => {onChange(e);setErrorText("");}}
            type={type}
            size={size}
            id={htmlFor}
            name={htmlFor}
            pattern={pattern}
            required={required}
            minLength={minlength}
            placeholder={placeHolder}
            className="bg-gray-50 border border-violet-300 text-gray-900 sm:text-sm rounded-xl
            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            dark:focus:border-blue-500"
            value={value}
            style={style}
            autoComplete={autoComplete}
            />
         <div>{errorText}</div>
        </>
    );
};
