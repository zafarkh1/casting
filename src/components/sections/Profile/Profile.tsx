"use client";

import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import { usePathname } from "next/navigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("form");
  const [createForm, setCreateForm] = useState<boolean>(false);
  const pathname = usePathname();

  const handleDeleteAccount = () => {
    localStorage.removeItem("registeredPhones");
    window.location.href = "/login";
    alert("Аккаунт удален!");
  };

  const handleLogoutAccount = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
    alert("Вы вышли из аккаунта!");
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      window.location.href = "/login";
    }
  }, [window.location.href]);

  return (
    <section className="lg:mt-24 mt-20 pt-10 pb-20 border-t border-t-[#FFFFFF1A]">
      {/*    heading    */}
      <h1 className="heading1 mb-10">Личный кабинет</h1>

      {/*    tabs    */}
      <div className="my-8 py-8 border-y border-y-[#FFFFFF1A] grid lg:grid-cols-6 items-center">
        {/*   tabs and buttons */}
        <div className="flexICenter gap-3 lg:col-span-2">
          <Button
            className={`catalogueBtn ${
              activeTab === "payment"
                ? "bg-primary"
                : "bg-lightGray text-secondary hover:text-white"
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Оплата и баланс
          </Button>
          <Button
            className={`catalogueBtn ${
              activeTab === "form"
                ? "bg-primary"
                : "bg-lightGray text-secondary hover:text-white"
            }`}
            onClick={() => setActiveTab("form")}
          >
            АНКЕТА
          </Button>
        </div>

        {/*    delete account */}
        <p
          className="text uppercase underline lg:col-span-1 lg:col-start-4 cursor-pointer hover:text-primary transition-all duration-300"
          onClick={handleDeleteAccount}
        >
          уДАЛИТЬ аккаунт
        </p>

        <Button
          className="flexCenter gap-3 myBtn hover:bg-primary hover:border-primary group lg:mx-0 mx-9 lg:col-span-2"
          onClick={handleLogoutAccount}
        >
          <span>вЫЙТИ ИЗ АККАУНТА</span>
          <span className="bg-primary group-hover:bg-white group-hover:text-primary rounded-full p-[6px]">
            <IconArrowTopRight className="size-3 fill-white group-hover:fill-primary" />
          </span>
        </Button>
      </div>

      {/*    form    */}
      {activeTab === "form" && !createForm && (
        <Button
          className="flexCenter gap-3 myBtn hover:bg-primary hover:border-primary group lg:mx-0 mx-9"
          onClick={() => setCreateForm(true)}
        >
          <span>СОЗДАТЬ АНКЕТУ</span>
          <span className="bg-primary group-hover:bg-white group-hover:text-primary rounded-full p-[6px]">
            <IconArrowTopRight className="size-3 fill-white group-hover:fill-primary" />
          </span>
        </Button>
      )}

      {activeTab === "form" && createForm && (
        <>
          <CreateForm />

          <div className="py-6 border-b border-b-[#FFFFFF1A] flex items-center justify-end lg:gap-6 gap-3">
            <p
              className="text uppercase underline 
            cursor-pointer hover:text-primary transition-all duration-300"
            >
              уДАЛИТЬ анкету
            </p>
            <Button
              className="myBtn bg-primary border-none hover:bg-primaryHover transition-all duration-300"
              onClick={() => setCreateForm(true)}
            >
              <span>Сохранить</span>
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Profile;
