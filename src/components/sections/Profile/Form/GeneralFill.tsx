"use client";

import { useEffect, useRef, useState } from "react";
import { useFormContext, Controller, useForm } from "react-hook-form";
import { IconArrowDown, IconPhoto } from "@/components/icons/icons";
import { getRelatedValues } from "@/api/api";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import Button from "@/components/Button";

interface GeneralFillProps {
  control: any;
  setValue: any;
}

const GeneralFill: React.FC<GeneralFillProps> = ({ control, setValue }) => {
  const [categories, setCategories] = useState<{
    profession: any[];
    city: any[];
  }>({
    profession: [],
    city: [],
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();

  useEffect(() => {
    const fetchCategoryData = async (category: string) => {
      try {
        const response = await getRelatedValues(category);
        setCategories((prev) => ({
          ...prev,
          [category]: response.results,
        }));
      } catch (error: any) {
        console.error(
          `Error fetching ${category} data:`,
          error.message || error
        );
      }
    };

    fetchCategoryData("profession");
    fetchCategoryData("city");
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setValue("picture", file as unknown as string);
    }
  };

  const openSelect = (ref: React.RefObject<HTMLSelectElement>) => {
    if (ref?.current) {
      ref.current.focus();
      ref.current.blur();
      ref.current.focus();
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
          <div>
            <h3 className="heading6">Имя:</h3>
            <Controller
              name="name"
              control={control}
              render={({ field }) => {
                return (
                  <input
                    {...field}
                    type="text"
                    className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                    placeholder="Имя"
                  />
                );
              }}
            />
          </div>

          {/* Work Age */}
          <div>
            <h3 className="heading6">Игровой возраст:</h3>
            <div className="flexICenter lg:gap-4 gap-3 mt-4">
              <Controller
                name="work_age_from"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full"
                    placeholder="От"
                    max={99}
                  />
                )}
              />
              <Controller
                name="work_age_to"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full"
                    placeholder="До"
                    max={99}
                  />
                )}
              />
            </div>
          </div>

          {/* Profession */}
          <div>
            <h3 className="heading6">Профессия:</h3>
            <Controller
              name="profession"
              control={control}
              render={({ field }) => (
                <div className="mt-4 relative">
                  <select
                    {...field}
                    ref={selectRef}
                    className="catalogueBtn border border-[#333] bg-transparent pr-8 appearance-none cursor-pointer w-full"
                  >
                    {categories.profession?.map((item) => (
                      <option
                        key={item?.id || Math.random()}
                        value={item?.id || ""}
                        className="bg-[#333] py-2"
                      >
                        {item?.name || "Unknown"}
                      </option>
                    ))}
                  </select>
                  <span
                    onClick={() => openSelect(selectRef)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                  >
                    <IconArrowDown className="size-4" />
                  </span>
                </div>
              )}
            />
          </div>

          {/* City */}
          <div>
            <h3 className="heading6">Место проживания:</h3>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <div className="mt-4 relative">
                  <select
                    {...field}
                    ref={selectRef}
                    className="catalogueBtn border border-[#333] bg-transparent pr-8 appearance-none cursor-pointer w-full"
                  >
                    {categories.city.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <span
                    onClick={() => openSelect(selectRef)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
                  >
                    <IconArrowDown className="size-4" />
                  </span>
                </div>
              )}
            />
          </div>

          {/* Phone Number */}
          <div>
            <h3 className="heading6">Номер телефона:</h3>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="Номер телефона"
                />
              )}
            />
          </div>

          {/* Email */}
          <div>
            <h3 className="heading6">Электронный адрес:</h3>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="Электронный адрес"
                />
              )}
            />
          </div>

          {/* Birth Date */}
          <div>
            <h3 className="heading6">Дата рождения:</h3>
            <Controller
              name="birth_date"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                />
              )}
            />
          </div>

          {/* Gender */}
          <div>
            <h3 className="heading6">Пол:</h3>
            <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <>
                    <Button
                      onClick={() => field.onChange("M")}
                      className={`catalogueBtn transition-all duration-500 ${
                        field.value === "M"
                          ? "bg-primary text-white"
                          : "bg-lightGray text-secondary"
                      }`}
                    >
                      Мужчина
                    </Button>
                    <Button
                      onClick={() => field.onChange("F")}
                      className={`catalogueBtn transition-all duration-500 ${
                        field.value === "F"
                          ? "bg-primary text-white"
                          : "bg-lightGray text-secondary"
                      }`}
                    >
                      Женщина
                    </Button>
                  </>
                )}
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="heading6">Статус:</h3>
            <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
              <Controller
                name="professional_level"
                control={control}
                render={({ field }) => (
                  <>
                    <Button
                      onClick={() => field.onChange("amateur")}
                      className={`catalogueBtn transition-all duration-500 ${
                        field.value === "amateur"
                          ? "bg-primary text-white"
                          : "bg-lightGray text-secondary"
                      }`}
                    >
                      Любитель
                    </Button>
                    <Button
                      onClick={() => field.onChange("professional")}
                      className={`catalogueBtn transition-all duration-500 ${
                        field.value === "professional"
                          ? "bg-primary text-white"
                          : "bg-lightGray text-secondary"
                      }`}
                    >
                      Профессионал
                    </Button>
                  </>
                )}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="heading6">Коротко о себе:</h3>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={4}
                  className="rounded-xl px-[29px] py-[10px] border border-[#333] bg-transparent appearance-none lg:text-2xl min-h-28 max-h-48 mt-4 w-full"
                  placeholder="Коротко о себе"
                />
              )}
            />
          </div>

          {/* Profile Photo */}
          <div>
            <h3 className="heading6">Фотография профиля:</h3>
            <div
              className="mt-4 h-36 border-2 border-dashed border-secondary flex items-center justify-center rounded-xl cursor-pointer"
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <input
                id="file-input"
                type="file"
                name="picture"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <div className="flex gap-2">
                <IconPhoto className="size-6" />
                <span>{fileName || "Добавить фото"}</span>
              </div>
            </div>
            {fileName && (
              <p className="mt-2 text-sm text-secondary">{fileName}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralFill;
