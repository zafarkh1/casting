import { useSectionFillStore } from "@/components/utils/zustand/useSectionFillStore";

const Size = () => {
  const { openSectionFill, toggleSectionFill } = useSectionFillStore();

  return (
    <div className="border-b border-b-[#FFFFFF1A] py-3 cursor-pointer">
      <div
        className="flex items-center justify-between"
        onClick={() => toggleSectionFill("Размеры")}
      >
        <h3 className="heading3 text-secondary">Размеры</h3>
        <span className="lg:text-3xl text-2xl lg:pr-4">
          {openSectionFill === "Размеры" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSectionFill === "Размеры" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-3 grid md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4 lg:pr-4">
          {/* Height */}
          <div>
            <h3 className="heading6">Рост:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="См"
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </div>
          </div>

          {/* Waist */}
          <div>
            <h3 className="heading6">Обхват бёдер:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="См"
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
          {/* Weight */}
          <div>
            <h3 className="heading6">Вес:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="Кг"
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </div>
          </div>

          {/* Shoe size */}
          <div>
            <h3 className="heading6">Длина ног:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="См"
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
          {/* Bust */}
          <div>
            <h3 className="heading6">Обхват груди:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="См"
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </div>
          </div>

          {/* Shoe size */}
          <div>
            <h3 className="heading6">Размер обуви:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="размер"
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
          {/* Waist */}
          <div>
            <h3 className="heading6">Обхват талии:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="См"
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </div>
          </div>

          {/* Clothes size */}
          <div>
            <h3 className="heading6">Размер одежды:</h3>
            <div className="flex lg:flex-row flex-col lg:items-center lg:gap-4 gap-3 mt-4 bg-transparent">
              <input
                type="number"
                className="catalogueBtn border border-[#333] bg-transparent appearance-none"
                placeholder="размер"
                onWheel={(e) => e.currentTarget.blur()}
                style={{
                  MozAppearance: "textfield",
                  WebkitAppearance: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Size;
