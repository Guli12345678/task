import { api } from "../../../shared/api";

export type Artwork = {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string | null;
  date_start: number;
  date_end: number;
};

export const fetchArtworksByPage = async (
  page: number = 1
): Promise<Artwork[]> => {
  const response = await api.get(
    `https://api.artic.edu/api/v1/artworks?page=${page}`
  );
  return response.data?.data ?? [];
};

export const fetchArtworkPaginationInfo = async (page: number = 1) => {
  const response = await api.get(
    `https://api.artic.edu/api/v1/artworks?page=${page}`
  );
  return response.data?.pagination;
};

export const fetchArtworkById = async (id: number): Promise<Artwork | null> => {
  const response = await api.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  return response.data?.data ?? null;
};
