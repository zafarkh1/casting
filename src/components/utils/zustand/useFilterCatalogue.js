import { create } from "zustand";

export const useFilterCatalogue = create((set) => ({
  gender: "all",
  actorType: "all",
  setGender: (gender) => set({ gender }),
  setActorType: (actorType) => set({ actorType }),
}));
