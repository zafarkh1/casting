import { IconPhoto } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { ChangeEvent, useState, useEffect } from "react";

const PhotosFill = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("Selected files:", files);

    if (files) {
      const newFileNames = Array.from(files).map((file) => file.name);
      setFileNames(newFileNames);
    }
  };

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
          onClick={() => document.getElementById("file-inputs")?.click()}
        >
          <input
            id="file-inputs"
            type="file"
            className="hidden"
            onChange={handleFilesChange}
            multiple
          />
          <div className="flex gap-2">
            <IconPhoto className="size-6" />
            <span>
              {fileNames.length > 0 ? fileNames.join(", ") : "Добавить фото"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosFill;
