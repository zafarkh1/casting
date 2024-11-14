import { IconArrowDown } from "@/components/icons/icons";
import Select, { components } from "react-select";

const MultipleSelect = ({ options }: any) => {
  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-primary rounded-full p-[5px] cursor-pointer">
          <IconArrowDown className="size-4" />
        </span>
      </components.DropdownIndicator>
    );
  };

  // Custom styles for react-select to match your design
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "2px solid #333",
      backgroundColor: "transparent",
      cursor: "pointer",
      boxShadow: "none",
      paddingLeft: "1rem",
      borderRadius: "200px",
      fontSize: "20px",
    }),
    option: (provided: any) => ({
      ...provided,
      backgroundColor: "#333",
      color: "#fff",
      borderBottom: "1px solid #5A5A5A",
      cursor: "pointer",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#333",
      color: "#fff",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "#fff",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      borderRadius: "12px",
    }),
    menuList: (provided: any) => ({
      ...provided,
      backgroundColor: "transparent",
      borderRadius: "12px",
    }),
  };
  return (
    <Select
      isMulti
      options={options}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
        IndicatorSeparator: null,
      }}
      styles={customStyles}
      placeholder="Select options"
    />
  );
};

export default MultipleSelect;
