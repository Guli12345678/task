import type { IArtwork } from "../../../pages/home/ui/Home";

export const SelectionPanel = ({ selected }: { selected: IArtwork[] }) => (
  <div className="bg-white rounded-md p-4 shadow-md mt-4">
    <h2 className="text-lg font-semibold mb-2">Selected Artworks</h2>
    <ul className="list-disc pl-5">
      {selected.map((art) => (
        <li key={art.id}>{art.title}</li>
      ))}
    </ul>
  </div>
);
