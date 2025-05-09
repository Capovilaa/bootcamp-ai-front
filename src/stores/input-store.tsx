import { create } from "zustand";

type InputStore = {
  input: string;
  isLoading: boolean;
  setInput: (value: string) => void;
  setIsloading: (value: boolean) => void;
  handleClickSendButton: () => void;
};

export const useInputStore = create<InputStore>((set, get) => ({
  input: "",
  isLoading: false,

  setInput: (value) => set({ input: value }),

  setIsloading: (value) => set({ isLoading: value }),

  handleClickSendButton: () => {
    const { input } = get();
    console.log("Chamando action para input ... ", input);
    set({ isLoading: !get().isLoading });
  },
}));
