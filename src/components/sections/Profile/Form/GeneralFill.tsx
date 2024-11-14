import Button from "@/components/Button";
import { IconArrowDown, IconPhoto } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { ChangeEvent, useRef, useState } from "react";

const GeneralFill = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();
  const select1 = useRef<HTMLSelectElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    console.log("Selected file:", file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      //   if (handleFileSelect) {
      //     onFileSelect(file);
      //   }
    }
  };
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
          {/* Name */}
          <div className="">
            <h3 className="heading6">Имя:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="Имя"
              />
            </div>
          </div>

          {/* Age */}
          <div className="">
            <h3 className="heading6">Игровой возраст:</h3>
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
        </div>

        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Profession */}
          <div className="">
            <h3 className="heading6">Профессия:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="Профессия"
              />
            </div>
          </div>

          {/* Living Place */}
          <div className="w-screen">
            <h3 className="heading6">Место проживания:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none w-fit"
                placeholder="Место проживания"
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Phone number */}
          <div className="">
            <h3 className="heading6">Номер телефона:</h3>
            <div className="mt-4">
              <input
                type="text"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="Номер телефона"
              />
            </div>
          </div>

          {/* Physical Features */}
          <div>
            <h3 className="heading6">Физические особенности:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              {/* First Select Input with Custom Icon */}
              <div className="relative w-full">
                <select
                  ref={select1}
                  name=""
                  id=""
                  className="catalogueBtn border border-[#333] bg-transparent pr-8 appearance-none cursor-pointer w-full"
                >
                  <option value="0" className="bg-[#333] py-2">
                    спортивная
                  </option>
                  <option value="1" className="bg-[#333] py-2">
                    спортивная
                  </option>
                  <option value="2" className="bg-[#333] py-2">
                    спортивная
                  </option>
                  <option value="3" className="bg-[#333] py-2">
                    спортивная
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

        <div className="lg:mt-10 lg:mb-7 my-3 grid grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Living Place */}
          <div className="">
            <h3 className="heading6">Электронный адрес:</h3>
            <div className="mt-4">
              <input
                type="email"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="Электронный адрес"
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Biography */}
          <div className="">
            <h3 className="heading6">Коротко о себе:</h3>
            <div className="mt-4">
              <textarea
                rows={4}
                cols={30}
                className="rounded-xl px-[29px] py-[10px] border border-[#333] bg-transparent appearance-none lg:text-2xl min-h-28 max-h-48"
                placeholder="Коротко о себе"
              />
            </div>
          </div>

          {/* Photo */}
          <div>
            <h3 className="heading6">Фото профиля:</h3>
            <div
              className="mt-4 lg:w-1/2 h-36 border-2 border-dashed border-secondary flex items-center justify-center rounded-xl cursor-pointer"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex gap-2">
                <IconPhoto className="size-6" />
                <span>{fileName || "Добавить фото"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralFill;
