import axios from "axios";

// API instance
export const api = axios.create({
  baseURL: "https://api.artic.edu/api/v1/artworks/",
});
