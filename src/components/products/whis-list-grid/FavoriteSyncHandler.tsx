'use client';
import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useFavoriteStore } from "@/store";

export const FavoriteSyncHandler = () => {
    const { status } = useSession();
    const previousStatus = useRef<typeof status>(status);
    const syncFavorites = useFavoriteStore(state => state.syncFavorites);
    const loadFavorites = useFavoriteStore(state => state.loadFavorites);
    const tempFavorites = useFavoriteStore(state => state.tempFavorites);
    const clearTempFavorites = useFavoriteStore(state => state.clearTempFavorites);

    useEffect(() => {
        if (status === 'authenticated') {
            loadFavorites();
            if (tempFavorites.length > 0) {
                syncFavorites();
            }
            syncFavorites();
        } else if (status === 'unauthenticated' && previousStatus.current === 'authenticated') {
            clearTempFavorites();
        }
        previousStatus.current = status;
    }, [status, tempFavorites.length, syncFavorites, clearTempFavorites]);
    return null;
}