"use client";

import { Dispatch, SetStateAction } from "react";
import Filter from "../Search/Filter";
import General from "../Search/Accordion/GeneralFill";
import Appearence from "../Search/Accordion/AppearenceFill";
import EducationFill from "../Profile/Form/EducationFill";
import Skills from "../Search/Accordion/SkillsFill";
import RolesFill from "../Profile/Form/RolesFill";
import PhotosFill from "../Profile/Form/PhotosFill";

const FormFilter = ({ isAgreed }: { isAgreed: boolean }) => {
  return (
    <>
      {isAgreed && (
        <div>
          <General />
          <Appearence />
          <EducationFill />
          <Skills />
          <RolesFill />
          <PhotosFill />
        </div>
      )}
    </>
  );
};

export default FormFilter;
