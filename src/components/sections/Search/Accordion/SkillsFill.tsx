import { getRelatedValues } from "@/api/api";
import { useEffect, useState } from "react";
import SkillCategory from "./SkillCategory";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";

const Skills = ({ control, setValue }: { control: any; setValue: any }) => {
  const categories = [
    {
      id: "acting-skill",
      title: "Актёрское мастерство:",
      sendId: "acting_skills",
    },
    { id: "voice-skill", title: "Работа с голосом:", sendId: "voice_skills" },
    {
      id: "movement-skill",
      title: "Движение и пластика:",
      sendId: "movement_skills",
    },
    {
      id: "musical-skill",
      title: "Музыкальные навыки:",
      sendId: "musical_skills",
    },
    {
      id: "language-skill",
      title: "Языковые навыки:",
      sendId: "language_skills",
    },
    {
      id: "social-skill",
      title: "Социальные и коммуникативные навыки:",
      sendId: "social_skills",
    },
    {
      id: "specific-role-skill",
      title: "Профессиональные навыки для специфических ролей:",
      sendId: "specific_role_skills",
    },
  ];
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();

  const [skillsData, setSkillsData] = useState<{
    [key: string]: { id: string; name: string }[];
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData: { [key: string]: { id: string; name: string }[] } = {};
      for (const category of categories) {
        const values = await getRelatedValues(category.id);
        fetchedData[category.id] = values.results || [];
      }
      setSkillsData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={() => toggleSectionFill("Навыки")}
      >
        <h3 className="heading3 text-secondary">Навыки</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Навыки" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Навыки" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 lg:pr-4 space-y-4">
          {categories.map((category) => (
            <SkillCategory
              control={control}
              key={category.id}
              title={category.title}
              options={skillsData[category.id] || []}
              name={category.sendId}
              setValue={setValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
