"use client";

import Button from "@/components/Button";
import Appearence from "../Search/Accordion/AppearenceFill";
import Size from "../Search/Accordion/SizeFill";
import Skills from "../Search/Accordion/SkillsFill";
import EducationFill from "./Form/EducationFill";
import GeneralFill from "./Form/GeneralFill";
import PhotosFill from "./Form/PhotosFill";
import RolesFill from "./Form/RolesFill";
import { useEffect } from "react";
import {
  getProfileData,
  postApplicationForm,
  updateProfileData,
} from "@/api/api";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import Contact from "../Home/Contact";

interface FormInfo {
  name: string;
  work_age_from: string;
  work_age_to: string;
  profession: string;
  city: string;
  phone: string;
  email: string;
  gender: string;
  professional_level: string;
  birth_date: string;
  description: string;
  picture: File | string;
  physical_feature: string;
  face_shape: string;
  eye_type: string;
  hair_type: string;
  skin_type: string;
  facial_feature: string;
  height: string;
  weight: string;
  leg_length: string;
  shoe_size: string;
  hip_circumference: string;
  chest_circumference: string;
  waist_circumference: string;
  clothing_size: string;
  acting_skills: string;
  voice_skills: string;
  movement_skills: string;
  musical_skills: string;
  language_skills: string;
  social_skills: string;
  specific_role_skills: string;
}

const CreateForm = () => {
  const { control, handleSubmit, setValue, reset, getValues } =
    useForm<FormInfo>({
      defaultValues: {
        name: "",
        work_age_from: "",
        work_age_to: "",
        profession: "",
        city: "",
        phone: "",
        email: "",
        gender: "",
        birth_date: "",
        professional_level: "",
        description: "",
        picture: "",
        physical_feature: "",
        face_shape: "",
        eye_type: "",
        hair_type: "",
        skin_type: "",
        facial_feature: "",
        height: "",
        weight: "",
        leg_length: "",
        shoe_size: "",
        hip_circumference: "",
        chest_circumference: "",
        waist_circumference: "",
        clothing_size: "",
        acting_skills: "",
        voice_skills: "",
        movement_skills: "",
        musical_skills: "",
        language_skills: "",
        social_skills: "",
        specific_role_skills: "",
      },
    });
  const pathname = usePathname();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const fetchedData = await getProfileData();
        if (fetchedData) {
          reset({
            ...fetchedData,
            profession: fetchedData.profession?.id || "",
            city: fetchedData.city?.id || "",
            picture: fetchedData.picture || "",
            face_shape: fetchedData.face_shape?.id || "",
            eye_type: fetchedData.eye_type?.id || "",
            hair_type: fetchedData.hair_type?.id || "",
            skin_type: fetchedData.skin_type?.id || "",
            facial_feature: fetchedData.facial_feature?.id || "",
            physical_feature: fetchedData.physical_feature?.id || "",
            acting_skills: fetchedData.acting_skills?.id || "",
            voice_skills: fetchedData.voice_skills?.id || "",
            movement_skills: fetchedData.movement_skills?.id || "",
            musical_skills: fetchedData.musical_skills?.id || "",
            language_skills: fetchedData.language_skills?.id || "",
            social_skills: fetchedData.social_skills?.id || "",
            specific_role_skills: fetchedData.specific_role_skills?.id || "",
          });
        }
      } catch (error: any) {
        console.error("Error fetching profile data:", error.message || error);
      }
    };

    fetchProfileData();
  }, [reset]);

  const onSubmit = async (data: FormInfo) => {
    const formData = new FormData();

    if (data.picture) {
      formData.append("picture", data.picture);
    }

    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      } else if (key !== "picture") {
        formData.append(key, value);
      }
    });

    console.log("formData", formData);

    try {
      pathname === "/profile"
        ? updateProfileData(formData)
        : postApplicationForm(formData);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <GeneralFill control={control} setValue={setValue} />
      <Appearence control={control} setValue={setValue} />
      <Size control={control} />
      <Skills control={control} />
      <EducationFill control={control} setValue={setValue} />
      <RolesFill />
      <PhotosFill />

      {pathname === "/profile" && (
        <div className="py-6 border-b border-b-[#FFFFFF1A] flex items-center justify-end lg:gap-6 gap-3">
          <p className="text uppercase underline cursor-pointer hover:text-primary transition-all duration-300">
            уДАЛИТЬ анкету
          </p>
          <Button
            type="submit"
            className="myBtn bg-primary border-none hover:bg-primaryHover transition-all duration-300"
          >
            <span>Сохранить</span>
          </Button>
        </div>
      )}

      {pathname === "/form" && (
        <Button type="submit" className="w-full">
          <Contact heading="ОТПРАВИТЬ" />
        </Button>
      )}
    </form>
  );
};

export default CreateForm;
