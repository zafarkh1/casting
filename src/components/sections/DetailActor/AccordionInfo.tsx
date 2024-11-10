import { ChangeEvent, useRef, useState } from "react";
import Button from "@/components/Button";
import { IconArrowDown } from "@/components/icons/icons";

const photos = [
  { id: 1, src: "/assets/detailActor/actress_2.png" },
  { id: 2, src: "/assets/detailActor/actress_3.png" },
  { id: 3, src: "/assets/detailActor/actress_4.png" },
  { id: 4, src: "/assets/detailActor/actress_5.png" },
  { id: 5, src: "/assets/detailActor/actress_6.png" },
  { id: 6, src: "/assets/detailActor/actress_7.png" },
];

const AccordionInfo: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const select1 = useRef<HTMLSelectElement>(null);
  const select2 = useRef<HTMLSelectElement>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const openSelect = (selectRef: React.RefObject<HTMLSelectElement>) => {
    if (selectRef.current) {
      selectRef.current.focus();
      selectRef.current.blur();
      selectRef.current.focus();
    }
  };

  return (
    <div className="lg:mt-8 mt-6 mb-10 lg:border-t border-t-[#FFFFFF1A] transition-all duration-700">
      <div className="border-b border-b-[#FFFFFF1A] py-3 flex items-center justify-between cursor-pointer">
        <h3 className="heading3 text-secondary">Внешность</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">+</span>
      </div>

      <div className="border-b border-b-[#FFFFFF1A] py-3 flex items-center justify-between cursor-pointer">
        <h3 className="heading3 text-secondary">Образование</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">+</span>
      </div>

      <div className="border-b border-b-[#FFFFFF1A] py-3 flex items-center justify-between cursor-pointer">
        <h3 className="heading3 text-secondary">Навыки</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">+</span>
      </div>

      <div className="border-b border-b-[#FFFFFF1A] py-3 flex items-center justify-between cursor-pointer">
        <h3 className="heading3 text-secondary">Роли</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">+</span>
      </div>

      <div className="border-b border-b-[#FFFFFF1A] py-3 flex items-center justify-between cursor-pointer">
        <h3 className="heading3 text-secondary">Портфолио</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">+</span>
      </div>

      <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
        <div
          className="flex items-center justify-between"
          onClick={() => toggleSection("Фотографии")}
        >
          <h3 className="heading3 text-secondary">Фотографии</h3>
          <span className="lg:text-3xl text-2xl lg:pr-4">
            {openSection === "Фотографии" ? "-" : "+"}
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 ${
            openSection === "Фотографии" ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="lg:mt-10 lg:mb-7 my-4 grid md:grid-cols-3 grid-cols-2 lg:gap-x-7 lg:gap-y-8 gap-6">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt="photo"
                className="w-full h-full object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionInfo;
