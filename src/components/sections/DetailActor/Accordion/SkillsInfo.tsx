import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const SkillsInfo = () => {
  const { openSection, toggleSection } = useSectionStore();

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div className="flexBetween" onClick={() => toggleSection("Навыки")}>
        <h3
          className={`heading3 text-secondary transitionAcc ${
            openSection === "Навыки" ? "text-white" : ""
          }`}
        >
          Навыки
        </h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSection === "Навыки" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:text-lg text-base lg:space-y-6  ${
          openSection === "Навыки" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="pb-[11px] mt-6 border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Актёрское мастерство:</span>
          <span>Эмоциональная выразительность</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Актёрское мастерство:</span>
          <span>Эмоциональная выразительность</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Актёрское мастерство:</span>
          <span>Эмоциональная выразительность</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Актёрское мастерство:</span>
          <span>Эмоциональная выразительность</span>
        </p>
        <p className="lg:pb-0 pb-[11px] lg:border-0 border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Актёрское мастерство:</span>
          <span>Эмоциональная выразительность</span>
        </p>
      </div>
    </div>
  );
};

export default SkillsInfo;
