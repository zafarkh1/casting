import { IconPhoto } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { useState } from "react";

const PhotosFill = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={() => toggleSectionFill("Фотография")}
      >
        <h3 className="heading3 text-secondary">Фотография</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Фотография" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Фотография" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div
          className="mt-4 lg:w-1/6 h-36 border-2 border-dashed border-secondary flex items-center justify-center rounded-xl cursor-pointer"
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            id="file-input"
            type="file"
            className="hidden"
            // onChange={handleFileChange}
          />
          <div className="flex gap-2">
            <IconPhoto className="size-6" />
            <span>{fileName || "Добавить фото"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosFill;
