"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";

const Login = () => {
  const [activeTab, setActiveTab] = useState<string>("register");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      window.location.href = "/profile";
    }
  }, [window.location.href]);

  return (
    <section className="lg:mt-24 mt-20 pt-10 pb-20 border-t border-t-[#FFFFFF1A]">
      <h1 className="heading1 mb-10">
        {activeTab === "register" ? "регистрация" : "вход"}
      </h1>

      <div className="flexICenter gap-3">
        <Button
          className={`catalogueBtn ${
            activeTab === "register"
              ? "bg-primary"
              : "bg-lightGray text-secondary hover:text-white"
          }`}
          onClick={() => setActiveTab("register")}
        >
          регистрация
        </Button>
        <Button
          className={`catalogueBtn ${
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
        <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-4">
          <input
            type="email"
            className="lg:col-span-2 col-span-1 catalogueBtn bg-transparent border border-[#333]"
            id="tel"
            placeholder="email"
          />
          <Button className="flexCenter gap-3 myBtn hover:bg-primary hover:border-primary group lg:mx-0 mx-9 transitionAccSlow">
            <span>{activeTab === "register" ? "регистрация" : "вход"}</span>
            <span className="bg-primary group-hover:text-primary rounded-full p-[6px]">
              <IconArrowTopRight className="size-3 fill-white" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
