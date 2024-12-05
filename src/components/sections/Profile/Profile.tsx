"use client";

import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import Cookies from "js-cookie";
import { logout } from "@/components/utils/axios/axiosInstance";
import { createApplicationForm, getProfileData, getProfile } from "@/api/api";
import { FormProvider, useForm } from "react-hook-form";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>("form");
  const [createForm, setCreateForm] = useState<boolean>(false);
  const [profile, setProfile] = useState<any>(null);
  const methods = useForm();

  // Delete account
  const handleDeleteAccount = () => {
    logout();
    window.location.href = "/login";
    alert("Аккаунт удален!");
  };

  // Logout account
  const handleLogoutAccount = () => {
    logout();
    window.location.href = "/login";
    alert("Вы вышли из аккаунта!");
  };

  // Ensure user is logged in
  useEffect(() => {
    const loggedInUser = Cookies.get("refresh_token_casting");
    if (!loggedInUser) {
      window.location.href = "/login";
    }
  }, []);

  // Create a new application form
  const handlePostForm = async () => {
    try {
      const response = await createApplicationForm();

      if (response.status === 200) {
        setCreateForm(true);
      }
    } catch (error) {
      console.error("Error creating application form:", error);
    }
  };

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();

        if (response) {
          setProfile(response?.actor);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  // Populate form data from API

  return (
    <section className="lg:mt-32 mt-20 pt-10 pb-20 border-t border-t-[#FFFFFF1A]">
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
      {activeTab === "form" && !createForm && !profile && (
        <Button
          className="flexCenter gap-3 myBtn hover:bg-primary hover:border-primary group lg:mx-0 mx-9"
          onClick={() => handlePostForm()}
        >
          <span>СОЗДАТЬ АНКЕТУ</span>
          <span className="bg-primary group-hover:bg-white group-hover:text-primary rounded-full p-[6px]">
            <IconArrowTopRight className="size-3 fill-white group-hover:fill-primary" />
          </span>
        </Button>
      )}

      {activeTab === "form" && profile && (
        <FormProvider {...methods}>
          <CreateForm />
        </FormProvider>
      )}
    </section>
  );
};

export default Profile;
