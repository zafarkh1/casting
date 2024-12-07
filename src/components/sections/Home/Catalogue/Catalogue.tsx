"use client";

import { useEffect, useState } from "react";
import { getActors, getRelatedValues } from "@/api/api";
import Button from "@/components/Button";
import Card from "./Card";
import { useFilterCatalogue } from "@/components/utils/zustand/useFilterCatalogue";

function Catalogue() {
  const { gender, actorType, setGender, setActorType } = useFilterCatalogue();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [categoryOptions, setCategoryOptions] = useState([
    { label: "", value: "" },
  ]);

  // Fetch categories dynamically
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await getRelatedValues("profession");
        setCategoryOptions([
          { label: "Все", value: "all" },
          ...response.results.map((category: any) => ({
            label: category.name,
            value: category.id,
          })),
        ]);
      } catch (error) {
        console.error("Failed to fetch category options:", error);
      }
    };

    fetchCategoryData();
  }, []);

  // Fetch actors when filters change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const filters = {};
        if (gender !== "all") filters.gender = gender === "male" ? "M" : "F";
        if (actorType !== "all") filters.profession = actorType;

        const { props } = await getActors(filters);
        setData(props.actors);
      } catch (error) {
        setError("Failed to fetch actors.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gender, actorType]);

  // Gender filter options
  const genderOptions = [
    { label: "Все", value: "all" },
    { label: "Мужчины", value: "male" },
    { label: "Женщины", value: "female" },
  ];

  return (
    <section className="pt-6">
      <h2 className="heading2">каталог актеров</h2>

      {/* Gender filter */}
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

      {/* Category filter */}
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
              }`}
              onClick={() => setActorType(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Actor cards */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Card data={data} />
      )}
    </section>
  );
}

export default Catalogue;
