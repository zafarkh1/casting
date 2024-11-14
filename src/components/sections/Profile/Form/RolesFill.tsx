import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { useRef } from "react";

const RolesFill = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();
  const select1 = useRef<HTMLSelectElement>(null);

  // Generate years from 1985 to 2024
  const years = Array.from({ length: 2024 - 1985 + 1 }, (_, i) => 1985 + i);

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
        onClick={() => toggleSectionFill("Роли")}
      >
        <h3 className="heading3 text-secondary">Роли</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Роли" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Роли" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 lg:pr-4 space-y-4">
          {/* Name of the movie */}
          <div>
            <h3 className="heading6">Название фильма:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn w-full border border-[#333] bg-transparent appearance-none"
                placeholder="Перед Рассветом"
              />
            </div>
          </div>

          {/* Director */}
          <div>
            <h3 className="heading6">Режиссёр:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn w-full border border-[#333] bg-transparent appearance-none"
                placeholder="Антонио Бандерес"
              />
            </div>
          </div>

          {/* Year */}
          <div>
            <h3 className="heading6">Год:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  {years.map((year) => (
                    <option
                      key={year}
                      value={year}
                      className="bg-[#333] py-2 overflow-y-scroll max-h-1"
                    >
                      {year}
                    </option>
                  ))}
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

          {/* Type */}
          <div>
            <h3 className="heading6">Тип проекта:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Тип проекта
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Тип проекта
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Тип проекта
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Тип проекта
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

          {/* Awards */}
          <div>
            <h3 className="heading6">Награды и номинации:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Кино
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Кино
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Кино
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Кино
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

export default RolesFill;
