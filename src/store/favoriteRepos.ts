import { create } from "zustand";
import { persist } from "zustand/middleware";

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoritesRepo: (id: number) => void;
  removeFavoritesRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<favoriteReposState>(
    (set) => ({
      favoriteReposIds: [],

      addFavoritesRepo: (id: number) =>
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        })),
      removeFavoritesRepo: (id: number) =>
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    {
      name: "favorite-repos",
    }
  )
);
