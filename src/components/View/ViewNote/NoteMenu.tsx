import React, { FC } from "react";
import {
  FloppyDiskBack,
  Folder,
  Eraser,
  X,
  CaretDown,
} from "@phosphor-icons/react";
import { useNoteStore } from "@/store/useMemoStore";

interface NoteMenuProps {
  handleSave: () => void;
}

const NoteMenu: FC<NoteMenuProps> = ({ handleSave }) => {
  const editNote = useNoteStore((state) => state.editNote);
  return (
    <div className="flex justify-end fixed bottom-1 p-2  w-full gap-3 lg:w-[45%]">
      <Eraser
        className={`${
          editNote
            ? "text-green-600 cursor-pointer"
            : "cursor-pointer hover:text-green-700"
        }`}
        size={30}
        weight="fill"
        onClick={() => useNoteStore.setState({ editNote: true })}
      />
      <FloppyDiskBack
        className="cursor-pointer hover:text-blue-700"
        size={30}
        weight="fill"
        onClick={() => handleSave()}
      />
      <X
        className="cursor-pointer hover:text-red-600 lg:hidden"
        size={30}
        weight="fill"
        onClick={() => useNoteStore.setState({ toggleNote: false })}
      />
    </div>
  );
};

export default NoteMenu;
