import { useQuery } from "@tanstack/react-query";
import {
  fetchArtworksByPage,
  fetchArtworkById,
  fetchArtworkPaginationInfo,
} from "../api/fetchApi";

export const useArtwork = () => {
  const getArtworks = (page: number) =>
    useQuery({
      queryKey: ["artworks", page],
      queryFn: () => fetchArtworksByPage(page),
      retry: 0,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 8,
      staleTime: 1000 * 60,
    });

  const getPaginationInfo = (page: number) =>
    useQuery({
      queryKey: ["artworkPagination", page],
      queryFn: () => fetchArtworkPaginationInfo(page),
      enabled: !!page,
    });

  const getArtworkById = (id: number) =>
    useQuery({
      queryKey: ["artwork", id],
      queryFn: () => fetchArtworkById(id),
      enabled: !!id,
    });

  return {
    getArtworks,
    getPaginationInfo,
    getArtworkById,
  };
};
