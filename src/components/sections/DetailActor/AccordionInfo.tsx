import AppearenceInfo from "./Accordion/AppearenceInfo";
import PhotosInfo from "./Accordion/PhotosInfo";
import EducationInfo from "./Accordion/EducationInfo";
import SkillsInfo from "./Accordion/SkillsInfo";
import RolesInfo from "./Accordion/RolesInfo";

const AccordionInfo = ({ actor }: any) => {
  return (
    <div className="lg:mt-10 mt-9 mb-10 transition-all duration-700">
      <AppearenceInfo actor={actor} />
      <EducationInfo actor={actor} />
      <SkillsInfo actor={actor} />
      <RolesInfo actor={actor} />
      <PhotosInfo actor={actor} />
    </div>
  );
};

export default AccordionInfo;
