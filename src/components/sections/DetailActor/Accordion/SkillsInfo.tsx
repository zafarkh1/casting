import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const SkillsInfo = ({ actor }: any) => {
  const { openSection, toggleSection } = useSectionStore();

  const skills = [
    { label: "Актёрское мастерство", value: actor?.acting_skills?.name },
    { label: "Вокальные способности", value: actor?.voice_skills?.name },
    { label: "Навыки движения", value: actor?.movement_skills?.name },
    { label: "Музыкальные способности", value: actor?.musical_skills?.name },
    { label: "Языковые способности", value: actor?.language_skills?.name },
    { label: "Социальные навыки", value: actor?.social_skills?.name },
    {
      label: "Навыки для определённых ролей",
      value: actor?.specific_role_skills?.name,
    },
  ];

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
        className={`overflow-hidden transition-all duration-500 lg:text-lg text-base lg:space-y-6 ${
          openSection === "Навыки" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {skills.map((skill, index) => (
          <p
            key={index}
            className="pb-[11px] mt-6 border-b border-b-[#FFFFFF1A] flexBetween"
          >
            <span className="text-secondary">{skill.label}:</span>
            <span>{skill.value || "N/A"}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfo;
