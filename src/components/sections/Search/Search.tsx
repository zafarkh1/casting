"use client";

import { useEffect, useState } from "react";
import Card from "../Home/Catalogue/Card";
import CategoryBtns from "./CategoryBtns";
import Filter from "./Filter";
import Input from "./Input";
import { actors } from "@/api/data";
import { useFilterCatalogue } from "@/components/utils/zustand/useFilterCatalogue";

function Search() {
  const { gender, actorType } = useFilterCatalogue();
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

  return (
    <>
      <Input
        filteredActors={filteredActors}
        setFilteredActors={setFilteredActors}
      />
      <CategoryBtns />
      {/* <Filter /> */}
      {/* <Card filteredActors={filteredActors} /> */}
    </>
  );
}

export default Search;
