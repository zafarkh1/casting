import { useEffect } from "react";
import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";
import { Controller, useFormContext } from "react-hook-form";

interface SizeFillProps {
  control: any;
}

const Size: React.FC<SizeFillProps> = ({ control }) => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      {/* Section Header */}
      <div
        className="flex items-center justify-between"
        onClick={() => toggleSectionFill("Размеры")}
      >
        <h3 className="heading3 text-secondary">Размеры</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Размеры" ? "-" : "+"}
        </span>
      </div>

      {/* Collapsible Section */}
      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Размеры" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {/* Form Fields */}
        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Height */}
          <div>
            <h3 className="heading6">Рост:</h3>
            <Controller
              name="height"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="См"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Hip Circumference */}
          <div>
            <h3 className="heading6">Обхват бёдер:</h3>
            <Controller
              name="hip_circumference"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="См"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Weight */}
          <div>
            <h3 className="heading6">Вес:</h3>
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="Кг"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Leg Length */}
          <div>
            <h3 className="heading6">Длина ног:</h3>
            <Controller
              name="leg_length"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="См"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Chest Circumference */}
          <div>
            <h3 className="heading6">Обхват груди:</h3>
            <Controller
              name="chest_circumference"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="См"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Shoe Size */}
          <div>
            <h3 className="heading6">Размер обуви:</h3>
            <Controller
              name="shoe_size"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="Размер"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Waist Circumference */}
          <div>
            <h3 className="heading6">Обхват талии:</h3>
            <Controller
              name="waist_circumference"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="См"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>

          {/* Clothing Size */}
          <div>
            <h3 className="heading6">Размер одежды:</h3>
            <Controller
              name="clothing_size"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="catalogueBtn border border-[#333] bg-transparent appearance-none w-full mt-4"
                  placeholder="Размер"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Size;
