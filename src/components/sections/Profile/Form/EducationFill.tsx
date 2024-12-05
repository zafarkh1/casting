import { getRelatedValues } from "@/api/api";
import { useEffect, useState } from "react";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import EducationCategory from "./EducationCategory";

const Skills = ({ control }: any) => {
  const categories = [
    { id: "education-institution", title: "Учебные заведения:" },
    { id: "course-workshop", title: "Курсы и мастер-классы:" },
    { id: "acting-method", title: "Актёрские методики:" },
  ];
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();

  const [educationData, setEducationData] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData: { [key: string]: string[] } = {};
      for (const category of categories) {
        const values = await getRelatedValues(category.id);

        fetchedData[category.id] = values.results || [];
      }

      setEducationData(fetchedData);
    };

    fetchData();
  }, []);

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={() => toggleSectionFill("Образование")}
      >
        <h3 className="heading3 text-secondary">Образование</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Образование" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Образование" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 lg:pr-4 space-y-4">
          {categories.map((category) => (
            <EducationCategory
              key={category.id}
              title={category.title}
              options={educationData[category.id] || []}
              name={category.id}
            />
          ))}
          <div>
            <h3 className="heading6">Дополнительные навыки:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full"
                placeholder="Профессия"
                //   value={profileData?.profession || ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
