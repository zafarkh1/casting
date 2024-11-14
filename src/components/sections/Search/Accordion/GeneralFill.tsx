import Button from "@/components/Button";
import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { ChangeEvent, useRef } from "react";

const General = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();
  const select1 = useRef<HTMLSelectElement>(null);
  const select2 = useRef<HTMLSelectElement>(null);

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
        onClick={() => toggleSectionFill("Общие данные")}
      >
        <h3 className="heading3 text-secondary">Общие данные</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Общие данные" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Общие данные" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Gender buttons */}
          <div className="">
            <h3 className="heading6">Пол:</h3>
            <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
              <Button
                className={`catalogueBtn transition-all duration-500 bg-lightGray text-secondary hover:text-white`}
              >
                Мужщины
              </Button>
              <Button
                className={`catalogueBtn transition-all duration-500 bg-lightGray text-secondary hover:text-white`}
              >
                женщины
              </Button>
            </div>
          </div>

          {/* Age */}
          <div className="">
            <h3 className="heading6">Возраст:</h3>
            <div className="flexICenter lg:gap-4 gap-3 mt-4">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full"
                placeholder="От"
                max={99}
                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(e.target.value, 10);
                  if (value > 99) {
                    e.target.value = "99";
                  } else if (value < 0) {
                    e.target.value = "0";
                  }
                }}
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />

              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full"
                placeholder="До"
                max={99}
                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                  const value = parseInt(e.target.value, 10);
                  if (value > 99) {
                    e.target.value = "99";
                  } else if (value < 0) {
                    e.target.value = "0";
                  }
                }}
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </div>
          </div>

          {/* Status */}
          <div className="">
            <h3 className="heading6">Статус:</h3>
            <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
              <Button
                className={`catalogueBtn transition-all duration-500 bg-lightGray text-secondary hover:text-white`}
              >
                любитель
              </Button>
              <Button
                className={`catalogueBtn transition-all duration-500 bg-lightGray text-secondary hover:text-white`}
              >
                профессионал
              </Button>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="heading6">Локация:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              {/* First Select Input with Custom Icon */}
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Узбекистан
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Россия
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Казахстан
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Турция
                  </option>
                </select>
                <span
                  onClick={() => openSelect(select1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                >
                  <IconArrowDown className="size-4" />
                </span>
              </div>

              {/* Second Select Input with Custom Icon */}
              <div className="relative w-full">
                <select
                  ref={select2}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                >
                  <option value="0" className="bg-[#333] py-2">
                    Ташкент
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    Нур-Султан
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    Алматы
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    Шымкент
                  </option>
                  <option value="4" className="bg-[#333] py-2">
                    Истабул
                  </option>
                  <option value="5" className="bg-[#333] py-2">
                    Москва
                  </option>
                </select>
                <span
                  onClick={() => openSelect(select2)}
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

export default General;
