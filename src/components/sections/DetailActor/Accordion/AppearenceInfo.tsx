import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const AppearenceInfo = ({ actor }: any) => {
  const { openSection, toggleSection } = useSectionStore();

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div className="flexBetween" onClick={() => toggleSection("Внешность")}>
        <h3
          className={`heading3 text-secondary transitionAcc ${
            openSection === "Внешность" ? "text-white" : ""
          }`}
        >
          Внешность
        </h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSection === "Внешность" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:text-lg text-base lg:space-y-6  ${
          openSection === "Внешность" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="pb-[11px] mt-6 border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Форма лица:</span>
          <span>{actor?.face_shape?.name}</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Цвет и длина волос:</span>
          <span>{actor?.hair_type?.name}</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Тип кожи:</span>
          <span>{actor?.skin_type?.name}</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Цвет глаз:</span>
          <span>{actor?.eye_type?.name}</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Особые черты лица:</span>
          <span>{actor?.facial_feature?.name}</span>
        </p>
        <p className="lg:pb-0 pb-[11px] lg:border-0 border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Физические особенности:</span>
          <span>{actor?.physical_feature?.name}</span>
        </p>
      </div>
    </div>
  );
};

export default AppearenceInfo;
