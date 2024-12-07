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
  [key: string]: any;
}

const CreateForm = () => {
  const { control, handleSubmit, setValue, reset, watch } = useForm<FormInfo>({
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
  const watchedValues = watch();

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
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [reset]);

  const prepareFormData = (data: FormInfo, isPatch: boolean) => {
    console.log(data);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      console.log(key, value);

      if (
        value instanceof File ||
        (value !== null && value !== undefined && value !== "")
      ) {
        formData.append(key, value);
      }
    });

    if (isPatch) {
      Object.keys(watchedValues).forEach((key) => {
        if (watchedValues[key] !== data[key]) {
          formData.append(key, data[key]);
        }
      });
    }

    return formData;
  };

  const onSubmit = async (data: FormInfo) => {
    const isUpdate = pathname === "/profile";

    const formData = prepareFormData(data, isUpdate);

    try {
      if (isUpdate) {
        await updateProfileData(formData);
      } else {
        await postApplicationForm(formData);
      }
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <GeneralFill control={control} setValue={setValue} />
      <Appearence control={control} setValue={setValue} />
      {pathname !== "/search" && <Size control={control} />}
      <Skills control={control} setValue={setValue} />
      {pathname !== "/search" && (
        <>
          <EducationFill control={control} setValue={setValue} />
          <RolesFill />
          <PhotosFill />
        </>
      )}
      {pathname === "/profile" && (
        <div className="py-6 border-b border-b-[#FFFFFF1A] flex items-center justify-end lg:gap-6 gap-3">
          <p className="text uppercase underline cursor-pointer hover:text-primary transition-all duration-300">
            удалить анкету
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

// filter
//         "gender",
//         "professional_level",
//         "city",
//         "profession",
//         "city__country",

//         "face_shape",
//         "hair_type",
//         "skin_type",
//         "eye_type",
//         "facial_feature",
//         "physical_feature",

//         "acting_skills",
//         "voice_skills",
//         "movement_skills",
//         "musical_skills",
//         "language_skills",
//         "social_skills",
//         "specific_role_skills",
