import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { useRef } from "react";

const EducationFill = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();
  const select1 = useRef<HTMLSelectElement>(null);

  const openSelect = (selectRef: React.RefObject<HTMLSelectElement>) => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.blur();
      selectRef.current.focus();
    }
  };

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
          {/* Educational institution */}
          <div>
            <h3 className="heading6">Учебные заведени:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Школа-студия МХАТ
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Школа-студия МХАТ
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Школа-студия МХАТ
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Школа-студия МХАТ
                  </option>
                </select>

                <span
                  onClick={() => openSelect(select1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                >
                  <IconArrowDown className="size-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="heading6">Курсы и мастер-классы:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Озвучивание и дубляж
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Озвучивание и дубляж
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Озвучивание и дубляж
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Озвучивание и дубляж
                  </option>
                </select>
                <span
                  onClick={() => openSelect(select1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                >
                  <IconArrowDown className="size-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Methods */}
          <div>
            <h3 className="heading6">Актёрские методики:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Танцы и хореография
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Танцы и хореография
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Танцы и хореография
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Танцы и хореография
                  </option>
                </select>
                <span
                  onClick={() => openSelect(select1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                >
                  <IconArrowDown className="size-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Additional */}
          <div>
            <h3 className="heading6">Дополнительные навыки:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Игра на музыкальных инструментах
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Игра на музыкальных инструментах
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Игра на музыкальных инструментах
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Игра на музыкальных инструментах
                  </option>
                </select>
                <span
                  onClick={() => openSelect(select1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                >
                  <IconArrowDown className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFill;
