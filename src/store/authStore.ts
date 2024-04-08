import { create } from "zustand";

type AuthStore = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  authenticated: false,
  setAuthenticated: (newState: boolean) => set({ authenticated: newState }),
}));
