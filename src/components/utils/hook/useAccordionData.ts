import { useState } from "react";
import { Section } from "@/types";

export const useAccordionData = () => {
  // Initialize state for each section based on titles in accordion
  const [generalData, setGeneralData] = useState({});
  const [appearanceData, setAppearanceData] = useState({});
  const [sizeData, setSizeData] = useState({});
  const [specialFeaturesData, setSpecialFeaturesData] = useState({});
  const [skillsData, setSkillsData] = useState({});

  // Helper function to update specific section data
  const updateSectionData = (sectionTitle: string, data: any) => {
    switch (sectionTitle) {
      case "Общие данные":
        setGeneralData((prevData) => ({ ...prevData, ...data }));
        break;
      case "Внешность":
        setAppearanceData((prevData) => ({ ...prevData, ...data }));
        break;
      case "Размеры":
        setSizeData((prevData) => ({ ...prevData, ...data }));
        break;
      case "Особенности":
        setSpecialFeaturesData((prevData) => ({ ...prevData, ...data }));
        break;
      case "Навыки":
        setSkillsData((prevData) => ({ ...prevData, ...data }));
        break;
      default:
        console.warn(`Unknown section: ${sectionTitle}`);
    }
  };

  // Return the states and updater function
  return {
    generalData,
    appearanceData,
    sizeData,
    specialFeaturesData,
    skillsData,
    updateSectionData,
  };
};
