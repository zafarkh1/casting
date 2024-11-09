import Button from "@/components/Button";
import { useFilterCatalogue } from "@/components/utils/zustand/useFilterCatalogue";

function CategoryBtns() {
  const { actorType, setActorType } = useFilterCatalogue();

  const categoryOptions = [
    { label: "Все", value: "all" },
    { label: "Модель", value: "filmActors" },
    { label: "Озвучивание", value: "voiceActors" },
    { label: "Дубляж", value: "seriesActors" },
  ];

  return (
    <div className="lg:mt-10">
      <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
        {categoryOptions.map((option) => (
          <Button
            key={option.value}
            className={`catalogueBtn transition-all duration-500 ${
              actorType === option.value
                ? "bg-primary"
                : "bg-lightGray text-secondary hover:text-white"
            } `}
            onClick={() => setActorType(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBtns;
