import { create } from "zustand";

interface FilterCatalogueStore {
  mode: string;

  gender: string;
  searchGender: string;
  actorType: string;
  professionalLevel: string;
  city: string;

  formShape: string;
  eyeType: string;
  hairType: string;
  skinType: string;
  facialFeature: string;
  physicalFeature: string;

  setMode: (mode: string) => void;

  setGender: (gender: string) => void;
  setSearchGender: (searchGender: string) => void;
  setActorType: (actorType: string) => void;
  setProfessionalLevel: (professionalLevel: string) => void;
  setCity: (city: string) => void;

  setFormShape: (formShape: string) => void;
  setEyeType: (eyeType: string) => void;
  setHairType: (hairType: string) => void;
  setSkinType: (skinType: string) => void;
  setFacialFeature: (facialFeature: string) => void;
  setPhysicalFeature: (physicalFeature: string) => void;
}

export const useFilterCatalogue = create<FilterCatalogueStore>((set) => ({
  mode: "post",

  gender: "all",
  actorType: "all",
  searchGender: "",
  professionalLevel: "",
  city: "",

  formShape: "",
  eyeType: "",
  hairType: "",
  skinType: "",
  facialFeature: "",
  physicalFeature: "",

  setMode: (mode) => set({ mode }),

  setGender: (gender) => set({ gender }),
  setSearchGender: (searchGender) => set({ searchGender }),
  setActorType: (actorType) => set({ actorType }),
  setProfessionalLevel: (professionalLevel) => set({ professionalLevel }),
  setCity: (city) => set({ city }),

  setFormShape: (formShape) => set({ formShape }),
  setEyeType: (eyeType) => set({ eyeType }),
  setHairType: (hairType) => set({ hairType }),
  setSkinType: (skinType) => set({ skinType }),
  setFacialFeature: (facialFeature) => set({ facialFeature }),
  setPhysicalFeature: (physicalFeature) => set({ physicalFeature }),
}));
