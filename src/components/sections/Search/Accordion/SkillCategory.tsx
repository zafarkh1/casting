import { IconArrowDown } from "@/components/icons/icons";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

interface SkillCategoryProps {
  title: string;
  options: { id: string; name: string }[];
  name: string;
  // control: any;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  options,
  name,
  // control,
}) => {
  const { setValue, control } = useFormContext();
  const formattedOptions = options.map((option) => ({
    value: option.id,
    label: option.name,
  }));
  const selectRef = useRef<HTMLSelectElement>(null);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderColor: "#333",
      backgroundColor: "transparent",
      paddingBlock: "8px",
      paddingInline: "15px",
      borderRadius: "200px",
      cursor: "pointer",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#333",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#e40046"
        : state.isFocused
        ? "#555"
        : "transparent",
      color: state.isSelected ? "#fff" : "#ddd",
      padding: "10px 15px",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#e40046",
      },
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#333",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#fff",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "#fff",
      ":hover": {
        backgroundColor: "#e40046",
        color: "#fff",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#999",
    }),
    dropdownIndicator: () => ({
      display: "none",
    }),
  };

  const openSelect = (ref: React.RefObject<HTMLSelectElement>) => {
    if (ref.current) {
      ref.current.focus();
      ref.current.blur();
      ref.current.focus();
    }
  };

  return (
    <div>
      <h3 className="heading6">{title}</h3>
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
        <div className="relative w-full">
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={formattedOptions}
                className="react-select-container"
                classNamePrefix="react-select"
                styles={customStyles}
                onChange={(selectedOptions) => {
                  const selectedValues = selectedOptions.map(
                    (option) => option.value
                  );
                  setValue(name, selectedValues);
                  console.log(
                    `Updated field "${name}" with values:`,
                    selectedValues
                  );
                }}
                placeholder="Выберите навыки..."
              />
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
  );
};

export default SkillCategory;
