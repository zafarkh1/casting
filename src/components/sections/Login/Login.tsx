"use client";

import { FormEvent, useEffect, useState } from "react";
import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";
import { sendCode } from "@/api/api";
import EmailModal from "./EmailModal";
import { login } from "@/components/utils/axios/axiosInstance";

const Login = () => {
  const [activeTab, setActiveTab] = useState<string>("register");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [serverMessage, setServerMessage] = useState<{
    success: string;
    verification_url: string;
  } | null>(null);
  const [loginError, setLoginError] = useState<string>("");
  const [loginSuccess, setLoginSuccess] = useState<string>("");

  useEffect(() => {
    if (serverMessage?.verification_url) {
      const result = serverMessage.verification_url;
      const user_id = result.split("user_id=")[1]?.split("&")[0];
      const code = result.split("code=")[1];

      if (user_id && code) {
        loginUser(user_id, code);
      } else {
        setLoginError("Invalid verification URL format.");
      }
    }
  }, [serverMessage]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return setEmailError("Email is required");
    if (!email.includes("@")) return setEmailError("Invalid email format");

    try {
      const response = await sendCode(email);
      setServerMessage(response);
      setEmailError("");
    } catch (error) {
      console.error("Error sending code:", error);
      setEmailError("Failed to send code. Please try again.");
    }
  };

  const loginUser = async (user_uid: string, code: string) => {
    try {
      const response = await login(user_uid, code);

      setLoginError("");
      console.log("Login response:", response);
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Failed to login. Please try again.");
    }
  };

  return (
    <>
      <section className="lg:mt-32 mt-20 pt-10 pb-20 border-t border-t-[#FFFFFF1A]">
        <h1 className="heading1 mb-10">
          {activeTab === "register" ? "регистрация" : "вход"}
        </h1>

        <div className="flexICenter gap-3">
          <Button
            className={`catalogueBtn uppercase ${
              activeTab === "register"
                ? "bg-primary"
                : "bg-lightGray text-secondary hover:text-white"
            }`}
            onClick={() => setActiveTab("register")}
          >
            регистрация
          </Button>
          <Button
            className={`catalogueBtn uppercase ${
              activeTab === "login"
                ? "bg-primary"
                : "bg-lightGray text-secondary hover:text-white"
            }`}
            onClick={() => setActiveTab("login")}
          >
            вход
          </Button>
        </div>

        <div className="my-8 py-8 border-y border-y-[#FFFFFF1A]">
          <label htmlFor="tel" className="text-2xl">
            Введите ваш E-mail:
          </label>
          <form
            className="relative mt-4 grid lg:grid-cols-3 grid-cols-1 gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              className="lg:col-span-2 col-span-1 catalogueBtn bg-transparent border border-[#333]"
              id="tel"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="flexCenter gap-3 myBtn hover:bg-primary hover:border-primary group lg:mx-0 mx-9 transitionAccSlow"
            >
              <span>{activeTab === "register" ? "регистрация" : "вход"}</span>
              <span className="bg-primary group-hover:text-primary rounded-full p-[6px]">
                <IconArrowTopRight className="size-3 fill-white" />
              </span>
            </Button>
          </form>

          {emailError && <p className="text-red-600">{emailError}</p>}
          {loginError && <p className="text-red-600">{loginError}</p>}
          {/* {loginSuccess && <p className="text-green-600">{loginSuccess}</p>} */}
        </div>
      </section>
      {serverMessage?.success && <EmailModal email={email} />}
    </>
  );
};

export default Login;
