import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import React, { useRef } from "react";

const Features = () => {
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
        onClick={() => toggleSectionFill("Особенности")}
      >
        <h3 className="heading3 text-secondary">Особенности</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Особенности" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Особенности" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 lg:pr-4 space-y-4">
          {/* Physical features */}
          <div>
            <h3 className="heading6">Физические особенности:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Отличительные черты лица
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Красивая
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Умная
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Обычная
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

          {/* Accent */}
          <div>
            <h3 className="heading6">Акценты и манера речи:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Умение изображать разные акценты или диалекты.
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Умение изображать разные акценты или диалекты.
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Умение изображать разные акценты или диалекты.
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Умение изображать разные акценты или диалекты.
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

          {/* Facial features */}
          <div>
            <h3 className="heading6">Мимика и пластика:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Гибкость тела, контроль над движениями.
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Гибкость тела, контроль над движениями.
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Гибкость тела, контроль над движениями.
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Гибкость тела, контроль над движениями.
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
            <h3 className="heading6">Профессиональные навыки:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Навыки танцев, пения или игры на музыкальных инструментах.
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Навыки танцев, пения или игры на музыкальных инструментах.
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Навыки танцев, пения или игры на музыкальных инструментах.
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Навыки танцев, пения или игры на музыкальных инструментах.
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

          {/* Psychology */}
          <div>
            <h3 className="heading6">Психологические особенности:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Личностные качества
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Личностные качества
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Личностные качества
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Личностные качества
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

export default Features;
