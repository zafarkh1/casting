"use client";

import { useFilterCatalogue } from "@/components/utils/zustand/useFilterCatalogue";
import Button from "@/components/Button";
import Card from "./Card";
import { useEffect, useState } from "react";
import { actors } from "@/api/data";

function Catalogue() {
  const { gender, actorType, setGender, setActorType } = useFilterCatalogue();
  const [filteredActors, setFilteredActors] = useState(actors);

  useEffect(() => {
    const filtered = actors.filter((actor) => {
      const genderMatch = gender === "all" || actor.gender === gender;
      const actorTypeMatch =
        actorType === "all" || actor.category === actorType;
      return genderMatch && actorTypeMatch;
    });

    setFilteredActors(filtered);
  }, [gender, actorType]);

  const genderOptions = [
    { label: "Все", value: "all" },
    { label: "Мужщины", value: "male" },
    { label: "Женщины", value: "female" },
  ];

  const categoryOptions = [
    { label: "Все", value: "all" },
    { label: "Киноактеры", value: "filmActors" },
    { label: "Актеры озвучки", value: "voiceActors" },
    { label: "Актеры сериалов", value: "seriesActors" },
  ];

  return (
    <section className="pt-6">
      <h2 className="heading2">каталог актеров</h2>

      {/* Gender buttons */}
      <div className="lg:my-10 my-6">
        <h3 className="heading3">Пол:</h3>
        <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
          {genderOptions.map((option) => (
            <Button
              key={option.value}
              className={`catalogueBtn transition-all duration-500 ${
                gender === option.value
                  ? "bg-primary"
                  : "bg-lightGray text-secondary hover:text-white"
              }`}
              onClick={() => setGender(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Category buttons */}
      <div className="lg:mt-10">
        <h3 className="heading3">Категория:</h3>
        <div className="flexICenter lg:gap-4 gap-3 flex-wrap mt-4">
          {categoryOptions.map((option) => (
            <Button
              key={option.value}
              className={`catalogueBtn transition-all duration-500 ${
                actorType === option.value
                  ? "bg-primary"
                  : "bg-lightGray text-secondary hover:text-white"
              } ${option.value === "seriesActors" ? "hidden sm:block" : ""}`}
              onClick={() => setActorType(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      <Card filteredActors={filteredActors} />
    </section>
  );
}

export default Catalogue;
