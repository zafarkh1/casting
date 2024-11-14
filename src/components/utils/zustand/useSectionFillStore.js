import { create } from "zustand";

export const useSectionFillStore = create((set) => ({
  openSectionFill: "Фотографии",
  toggleSectionFill: (section) =>
    set((state) => ({
      openSectionFill: state.openSectionFill === section ? null : section,
    })),
}));
