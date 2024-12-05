import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const EducationInfo = ({ actor }: any) => {
  const { openSection, toggleSection } = useSectionStore();

  const skills = [
    {
      label: "Учебные заведения",
      value: actor?.educations?.educational_institution?.name,
    },
    {
      label: "Курсы и мастер-классы",
      value: actor?.educations?.courses_and_workshop?.name,
    },
    {
      label: "Актёрские методики",
      value: actor?.educations?.acting_method?.name,
    },
    {
      label: "Дополнительные навыки",
      value: actor?.educations?.additional_skills?.name,
    },
  ];

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div className="flexBetween" onClick={() => toggleSection("Образование")}>
        <h3
          className={`heading3 text-secondary transitionAcc ${
            openSection === "Образование" ? "text-white" : ""
          }`}
        >
          Образование
        </h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSection === "Образование" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:text-lg text-base lg:space-y-6 ${
          openSection === "Образование" ? "max-h-[1000px]" : "max-h-0"
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

export default EducationInfo;
