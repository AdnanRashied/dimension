import LoginPageBackground from "../../../styles/LoginPageBackground.module.scss";

const LoginPage = () => {
  return (
    <>
     <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
             from-gray-900 via-black to-black absolute flex items-center overflow-hidden
             place-content-center inset-0 no-rotate"/>

    <div className={ LoginPageBackground.gradient }/>

    </>
  );
};

export default LoginPage;
