"use client";

import { useEffect, useState } from "react";
import Card from "../Home/Catalogue/Card";
import CategoryBtns from "./CategoryBtns";
import Input from "./Input";
import { getActors, getRelatedValues } from "@/api/api";
import { useFilterCatalogue } from "@/components/utils/zustand/useFilterCatalogue";
import { FormProvider, useForm } from "react-hook-form";
import CreateForm from "../Profile/CreateForm";
import { usePathname } from "next/navigation";

function Search() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([
    { label: "Все", value: "all" },
  ]);
  const {
    city,
    actorType,
    searchGender,
    professionalLevel,
    formShape,
    eyeType,
    hairType,
    skinType,
    facialFeature,
    physicalFeature,
  } = useFilterCatalogue();
  const methods = useForm();

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

  // Fetch all data by default
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const { props } = await getActors();
        setData(props.actors);
      } catch (error) {
        setError("Failed to fetch actors.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(formShape);

  // Fetch actors based on filters and searchKey
  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const filters: any = {};
      if (searchGender) filters.gender = searchGender === "M" ? "M" : "F";
      if (actorType !== "all") filters.profession = actorType;
      if (searchKey.trim()) filters.search = searchKey.trim();
      if (professionalLevel) filters.professional_level = professionalLevel;
      if (city) filters.city = city;
      if (formShape) filters.face_shape = formShape;
      if (eyeType) filters.eye_type = eyeType;
      if (hairType) filters.hair_type = hairType;
      if (skinType) filters.skin_type = skinType;
      if (facialFeature) filters.facial_feature = facialFeature;
      if (physicalFeature) filters.physical_feature = physicalFeature;

      console.log("filters", filters);

      const { props } = await getActors(filters);
      setData(props.actors);
    } catch (error) {
      setError("Failed to fetch actors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        onSearch={handleSearch}
      />
      <CategoryBtns categoryOptions={categoryOptions} />
      <div className="lg:mt-8 mt-6 mb-0 border-t border-t-[#FFFFFF1A] transition-all duration-700">
        <FormProvider {...methods}>
          <CreateForm />
        </FormProvider>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Card data={data} />
    </div>
  );
}

export default Search;
