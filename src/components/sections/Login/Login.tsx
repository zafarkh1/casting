"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";

const Login = () => {
  const [activeTab, setActiveTab] = useState<string>("register");
  const [phone, setPhone] = useState<string>("+998 ");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+ ]/g, ""); // Allow only numbers, +, and space

    // Enforce +998 XX XXX XX XX pattern with maximum length
    if (value.startsWith("+998")) {
      value =
        "+998 " +
        value.slice(5).replace(/(\d{2})(\d{3})(\d{2})(\d{2})?/, "$1 $2 $3 $4");
    } else {
      value = "+998 "; // Set to default if not starting with +998
    }

    if (value.length <= 16) {
      setPhone(value.trimEnd());
    }
  };

  const handleAuth = () => {
    const registeredPhones = JSON.parse(
      localStorage.getItem("registeredPhones") || "[]"
    );

    if (activeTab === "register") {
      if (registeredPhones.includes(phone)) {
        alert("Phone number is already registered!");
      } else {
        registeredPhones.push(phone);
        localStorage.setItem(
          "registeredPhones",
          JSON.stringify(registeredPhones)
        );
        alert("Registered successfully!");
        setPhone("+998 ");
        setActiveTab("login");
      }
    } else {
      if (registeredPhones.includes(phone)) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", phone);
        window.location.href = "/profile";
      } else {
        alert("Phone number not registered!");
      }
    }
  };

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
          Ваш номер телефона:
        </label>
        <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-4">
          <input
            type="tel"
            className="lg:col-span-2 col-span-1 catalogueBtn bg-transparent border border-[#333]"
            id="tel"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={17}
            placeholder="+998 XX XXX XX XX"
          />
          <Button
            className="flexCenter gap-3 myBtn hover:bg-primary hover:border-0 group lg:mx-0 mx-9"
            onClick={handleAuth}
          >
            <span>{activeTab === "register" ? "регистрация" : "вход"}</span>
            <span className="bg-primary group-hover:bg-white group-hover:text-primary rounded-full p-[6px]">
              <IconArrowTopRight className="size-3 fill-white group-hover:fill-primary" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
