import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const EducationInfo = () => {
  const { openSection, toggleSection } = useSectionStore();

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
        className={`overflow-hidden transition-all duration-500 lg:text-lg text-base lg:space-y-6  ${
          openSection === "Образование" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="pb-[11px] mt-6 border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Учебные заведени</span>
          <span>Школа-студия МХАТ</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Учебные заведени</span>
          <span>Школа-студия МХАТ</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Учебные заведени</span>
          <span>Школа-студия МХАТ</span>
        </p>
        <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Учебные заведени</span>
          <span>Школа-студия МХАТ</span>
        </p>
        <p className="lg:pb-0 pb-[11px] lg:border-0 border-b border-b-[#FFFFFF1A] flexBetween">
          <span className="text-secondary">Учебные заведени</span>
          <span>Школа-студия МХАТ</span>
        </p>
      </div>
    </div>
  );
};

export default EducationInfo;
