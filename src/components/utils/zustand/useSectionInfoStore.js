import { create } from "zustand";

export const useSectionStore = create((set) => ({
  openSection: "Фотографии",
  toggleSection: (section) =>
    set((state) => ({
      openSection: state.openSection === section ? null : section,
    })),
}));
