import { Note } from "@phosphor-icons/react";
import { useNoteStore } from "@/store/useMemoStore";

const AllNote = () => {
  const findNote = useNoteStore((state) => state.findNote);
  return (
    <div
    className={`${
      findNote === null
        ? "flex justify-between bg-primary-focus rounded px-2 py-1 cursor-pointer"
        : "flex justify-between hover:bg-primary-focus rounded  px-2 py-1 cursor-pointer"
    }`}
      onClick={() => useNoteStore.setState({ findNote: null })}
    >
      <h1 className="font-bold text-lg">All Notes</h1>
      <Note size={30} color="#d1d1d1" weight="fill" />
    </div>
  );
};

export default AllNote;
