import { Note } from "@phosphor-icons/react";
const EmptyViewNote = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[600px] gap-3">
      <Note size={200} color="#d1d1d1" weight="thin" />
      <h1 className="text-3xl font-semibold">Select a note to view</h1>
      <h4 className="text-center text-[#a3a3a3]">
        Choose a note from the list on the left to view its<br/> contents, or create
        a new note to add to your collection.
      </h4>
    </div>
  );
};

export default EmptyViewNote;
