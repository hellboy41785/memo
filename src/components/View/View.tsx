import { useNoteStore } from "@/store/useMemoStore";
import EmptyViewNote from "./EmptyViewNote";
import ViewNote from "./ViewNote/ViewNote";

const View = () => {
  const toggleNote = useNoteStore((state) => state.toggleNote);

  return (
    <div
      className={`${
        toggleNote
          ? "absolute inset-0 lg:relative  lg:w-10/12 border-l border-gray-700  flex lg:flex flex-col bg-[#212121]"
          : "hidden lg:w-10/12 border-l border-gray-700 lg:flex flex-col"
      }`}
    >
      {toggleNote !== true && <EmptyViewNote />}
      {toggleNote && <ViewNote />}
    </div>
  );
};

export default View;
