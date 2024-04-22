import { create } from "zustand";


interface State {
    isSlideOverOpen: boolean;

    openSlideOver: () => void;
    closeSlideOver: () => void;
}


export const useSlideCartStore = create<State>()((set) => ({
    isSlideOverOpen: false,

    openSlideOver: () =>set({ isSlideOverOpen: true }),
    closeSlideOver: () =>set({ isSlideOverOpen: false }),
}));