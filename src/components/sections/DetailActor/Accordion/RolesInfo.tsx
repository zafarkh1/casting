import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const RolesInfo = ({ actor }: any) => {
  const { openSection, toggleSection } = useSectionStore();

  const roles = [
    { label: "Год", value: actor?.roles?.year },
    { label: "Название фильма", value: actor?.roles?.film_name },
    { label: "Тип проекта", value: actor?.roles?.project_type },
    { label: "Режиссёр", value: actor?.roles?.film_director_name },
    { label: "Награды и номинации", value: actor?.roles?.awards_nominations },
  ];

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div className="flexBetween" onClick={() => toggleSection("Роли")}>
        <h3
          className={`heading3 text-secondary transitionAcc ${
            openSection === "Роли" ? "text-white" : ""
          }`}
        >
          Роли
        </h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSection === "Роли" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:text-lg text-base lg:space-y-6 ${
          openSection === "Роли" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="mt-3 text-2xl text-white">
          {actor?.roles?.role_name ? actor?.roles?.role_name : "N/A"}
        </p>
        {roles.map((role, index) => (
          <p
            key={index}
            className="pb-[11px] mt-6 border-b border-b-[#FFFFFF1A] flexBetween"
          >
            <span className="text-secondary">{role.label}:</span>
            <span>{role.value || "N/A"}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RolesInfo;
