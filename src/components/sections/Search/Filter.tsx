import Appearence from "./Accordion/AppearenceFill";
import General from "./Accordion/GeneralFill";
import Size from "./Accordion/SizeFill";
import Features from "./Accordion/FeaturesFill";
import Skills from "./Accordion/SkillsFill";

const Filter: React.FC = () => {
  return (
    <div className="lg:mt-8 mt-6 mb-0 border-t border-t-[#FFFFFF1A] transition-all duration-700">
      <General />
      <Appearence />
      <Size />
      <Features />
      <Skills />
    </div>
  );
};

export default Filter;
