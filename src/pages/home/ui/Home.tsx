import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { useArtwork } from "../../../entities/table/model/useArtwork";
import { useSearchParams } from "react-router-dom";
import { MoviePagination } from "../../../features/movie-pagination";
import { useState } from "react";
import { SelectionPanel } from "../../../features/selection/ui/SelectionPanel";

export type IArtwork = {
  id: number;
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string | null;
  date_start: number;
  date_end: number;
};

export const Home = () => {
  const { getArtworks } = useArtwork();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");

  const { data } = getArtworks(page);
  const [selectedArtworks, setSelectedArtworks] = useState<IArtwork[]>([]);

  return (
    <div className="container mx-auto mt-20">
      <DataTable
        value={data}
        rows={4}
        selection={selectedArtworks}
        onSelectionChange={(e) => setSelectedArtworks(e.value)}
        dataKey="id"
        selectionMode="multiple"
        className="rounded-xl shadow-md text-sm p-10 text-gray-800 bg-white"
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        <Column field="title" header="Title" />
        <Column field="place_of_origin" header="Origin" />
        <Column field="artist_display" header="Artist Display" />
        <Column field="inscriptions" header="Inscriptions" />
        <Column field="date_start" header="Date Start" />
        <Column field="date_end" header="Date End" />
      </DataTable>
      <SelectionPanel selected={selectedArtworks} />

      <MoviePagination page={String(page)} total_pages={100} />
    </div>
  );
};
