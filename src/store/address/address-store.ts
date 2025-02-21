import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
    address: {
        firstName: string;
        lastName: string;
        address: string;
        address2?: string;
        postalCode: string;
        city: string;
        country: string;
        phone: string;
    };

    // Methods

    setAddress: (address: State['address']) => void;
    resetAddress: () => void;
}

const initialAddress = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    postalCode: '',
    city: '',
    country: '',
    phone: '',
  };


export const useAddressStore = create<State>()(
    devtools(
        persist(
            (set, get) => ({
                address: initialAddress,
                setAddress: (address) => { set({ address }) },
                resetAddress: () => set({ address: initialAddress })
            }),
            {
                name: 'address-storage'
            }
        )
    )
)