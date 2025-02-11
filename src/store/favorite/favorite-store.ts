import { create } from "zustand";
import { Product } from "@/interfaces";
import { devtools, persist } from "zustand/middleware";
import { addToFavorite, deleteFromFavorites, getFavorites, syncFavorite } from "@/actions";

interface FavoriteState {
    favorites: Product[];
    tempFavorites: Product[];
    loading: boolean;
    error: string | null;

    loadFavorites: () => Promise<void>;
    toggleFavorite: (favorite: Product, isAuthenticated: boolean) => Promise<void>;
    syncFavorites: () => Promise<void>;
    clearTempFavorites: () => void;
  }

  export const useFavoriteStore = create<FavoriteState>()(
    devtools(
        persist(
            (set, get) => ({
                favorites: [],
                tempFavorites: [],
                loading: false,
                error: null,
                
                //Methods
                loadFavorites: async () => {
                  set({ loading: true, error: null });
                  try {
                    const favorites = await getFavorites();
                    set({ favorites, loading: false });
                  } catch (error) {
                    set({ error: error instanceof Error ? error.message : "Error desconocido", loading: false });
                  }
                },

                toggleFavorite: async (favorite: Product, isAuthenticated: boolean) => {
                  console.log({favorite, isAuthenticated})
                  const { favorites, tempFavorites, loadFavorites } = get();
                  set({ loading: true, error: null });
          
                  try {
                    // Si el usuario está autenticado
                    if (isAuthenticated) { // Implementa esta función según tu auth provider
                      console.log("Usuario autenticado - NO debería entrar aquí si no estás logueado"); // CONSOLE LOG 2:  Control de flujo (autenticado)
                      if (favorites.some(f => f.id === favorite.id)) {
                        await deleteFromFavorites(favorite.id);
                      } else {
                        await addToFavorite(favorite.id);
                      }
                      await loadFavorites();
                    } else {
                      // Usuario no autenticado - manejar en tempFavorites
                      console.log("aqui estamos: ", favorite.id)
                      set(state => ({
                        // ...state,
                        tempFavorites: state.tempFavorites.some(favProduct => favProduct.id === favorite.id)
                        ? state.tempFavorites.filter(favProduct => favProduct.id !== favorite.id)
                        : [...state.tempFavorites, favorite]
                      }));
                      console.log("tempFavorites después de set:", get().tempFavorites); // CONSOLE LOG 4:  Ver estado de tempFavorites después de la actualización

                    }
                  } catch (error) {
                    set({ error: error instanceof Error ? error.message : "Error al actualizar favoritos" });
                  } finally {
                    set({ loading: false });
                  }
                },

                syncFavorites: async () => {
                  const { tempFavorites, loadFavorites } = get();
                  if (tempFavorites.length === 0) return;
          
                  try {
                    set({ loading: true });
                    const productIdsToSync = tempFavorites.map(product => product.id);
                    await syncFavorite(productIdsToSync);
                    await loadFavorites();
                    set({ tempFavorites: [] });
                  } catch (error) {
                    set({ error: "Error al sincronizar favoritos" });
                  } finally {
                    set({ loading: false });
                  }
                },
                clearTempFavorites: () => set({ tempFavorites: [] }),
          
            }),  
            {
                name: "favorite-store",
            }
        ),
    )
  );