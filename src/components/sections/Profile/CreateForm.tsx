import Appearence from "../Search/Accordion/AppearenceFill";
import Skills from "../Search/Accordion/SkillsFill";
import EducationFill from "./Form/EducationFill";
import GeneralFill from "./Form/GeneralFill";
import PhotosFill from "./Form/PhotosFill";
import RolesFill from "./Form/RolesFill";

const CreateForm = () => {
  return (
    <>
      <GeneralFill />
      <Appearence />
      <Skills />
      <EducationFill />
      <RolesFill />
      <PhotosFill />
    </>
  );
};

export default CreateForm;
