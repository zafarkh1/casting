import { ChangeEvent, useEffect, useRef, useState } from "react";
import { IconArrowDown } from "@/components/icons/icons";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { getRelatedValues } from "@/api/api";
import { Controller, useForm } from "react-hook-form";

interface GeneralFillProps {
  control: any;
  setValue: any;
}

const Appearence: React.FC<GeneralFillProps> = ({ control, setValue }) => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();

  const selectRef = useRef<HTMLSelectElement>(null);
  const [categories, setCategories] = useState<{
    [key: string]: any[];
  }>({
    "face-shape": [],
    "eye-type": [],
    "hair-type": [],
    "skin-type": [],
    "physical-feature": [],
    "facial-feature": [],
  });

  useEffect(() => {
    const fetchCategoryData = async (category: string) => {
      try {
        const response = await getRelatedValues(category);
        setCategories((prev) => ({
          ...prev,
          [category]: response.results,
        }));
      } catch (error) {
        console.error(`Error fetching data for ${category}:`, error);
      }
    };

    const categoriesToFetch = [
      "face-shape",
      "eye-type",
      "hair-type",
      "skin-type",
      "physical-feature",
      "facial-feature",
    ];
    categoriesToFetch.forEach(fetchCategoryData);
  }, []);

  const openSelect = (ref: React.RefObject<HTMLSelectElement>) => {
    if (ref.current) {
      ref.current.focus();
      ref.current.blur();
      ref.current.focus();
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
        {/* Face Shape */}
        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          <div>
            <h3 className="heading6">Форма лица:</h3>
            <div className="mt-4 relative">
              <Controller
                name="face_shape"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                  >
                    {categories["face-shape"].map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              <span
                onClick={() => openSelect(selectRef)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
              >
                <IconArrowDown className="size-4" />
              </span>
            </div>
          </div>

          {/* Eye Type */}
          <div>
            <h3 className="heading6">Цвет глаз:</h3>
            <div className="mt-4 relative">
              <Controller
                name="eye_type"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                  >
                    {categories["eye-type"].map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              <span
                onClick={() => openSelect(selectRef)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
              >
                <IconArrowDown className="size-4" />
              </span>
            </div>
          </div>

          {/* Hair Type */}
          <div>
            <h3 className="heading6">Цвет волос:</h3>
            <div className="mt-4 relative">
              <Controller
                name="hair_type"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                  >
                    {categories["hair-type"].map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              <span
                onClick={() => openSelect(selectRef)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
              >
                <IconArrowDown className="size-4" />
              </span>
            </div>
          </div>

          {/* Facial Feature */}
          <div>
            <h3 className="heading6">Особые черты лица:</h3>
            <div className="mt-4 relative">
              <Controller
                name="facial_feature"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                  >
                    {categories["facial-feature"].map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              <span
                onClick={() => openSelect(selectRef)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
              >
                <IconArrowDown className="size-4" />
              </span>
            </div>
          </div>

          {/* Skin Type */}
          <div>
            <h3 className="heading6">Цвет кожи:</h3>
            <div className="mt-4 relative">
              <Controller
                name="skin_type"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                  >
                    {categories["skin-type"].map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              <span
                onClick={() => openSelect(selectRef)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
              >
                <IconArrowDown className="size-4" />
              </span>
            </div>
          </div>

          {/* Physical Feature */}
          <div>
            <h3 className="heading6">Особые черты тела:</h3>
            <div className="mt-4 relative">
              <Controller
                name="physical_feature"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="catalogueBtn border border-[#333] w-full bg-transparent pr-8 appearance-none cursor-pointer"
                  >
                    {categories["physical-feature"].map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="bg-[#333] py-2"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              <span
                onClick={() => openSelect(selectRef)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer"
              >
                <IconArrowDown className="size-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearence;
