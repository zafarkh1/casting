import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { useRef } from "react";

const Appearence = () => {
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
        onClick={() => toggleSectionFill("Внешность")}
      >
        <h3 className="heading3 text-secondary">Внешность</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Внешность" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Внешность" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Face shape */}
          <div>
            <h3 className="heading6">Форма лица:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Круглая
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Квадратная
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Прямоугольная
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Овал
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

          {/* Eyes color */}
          <div>
            <h3 className="heading6">Цвет глаз</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Карие
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Голубые
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Серые
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Зеленые
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

        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Hair color */}
          <div>
            <h3 className="heading6">Цвет волос:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Каштан
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Серый
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Белый
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Черный
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

          {/* Special features */}
          <div>
            <h3 className="heading6">Особые черты лица:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    спортивная
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    красивая
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    обычная
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    умная
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

        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Skin color */}
          <div>
            <h3 className="heading6">Тип кожи:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    светлая
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    темная
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    серая
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    зеленая
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
                    спортивная
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    красивая
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    обычная
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    умная
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

export default Appearence;
