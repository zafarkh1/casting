import { create } from "zustand";

export const useProfileData = create((set) => ({
  profileData: null,
  setProfileData: (data) => set({ profileData: data }),
}));
