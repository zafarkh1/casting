import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { useRef } from "react";

const Skills = () => {
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
          {/* Mastership */}
          <div>
            <h3 className="heading6">Актёрское мастерство:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Эмоциональная выразительность
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Эмоциональная выразительность
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Эмоциональная выразительность
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Эмоциональная выразительность
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

          {/* Work with voice */}
          <div>
            <h3 className="heading6">Работа с голосом:</h3>
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

          {/* Dance */}
          <div>
            <h3 className="heading6">Движение и пластика:</h3>
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

          {/* Music */}
          <div>
            <h3 className="heading6">Музыкальные навыки:</h3>
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

          {/* Languages */}
          <div>
            <h3 className="heading6">Языковые навыки:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Знание иностранных языков
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Знание иностранных языков
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Знание иностранных языков
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Знание иностранных языков
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

          {/* Social */}
          <div>
            <h3 className="heading6">Социальные и коммуникативные навыки:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Работа в команде
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Работа в команде
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Работа в команде
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Работа в команде
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

          {/* Profession */}
          <div>
            <h3 className="heading6">
              Профессиональные навыки для специфических ролей:
            </h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Навыки езды на транспортных средствах
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Навыки езды на транспортных средствах
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Навыки езды на транспортных средствах
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Навыки езды на транспортных средствах
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

export default Skills;
