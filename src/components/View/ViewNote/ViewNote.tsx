import React, { useState, useRef } from "react";
import { useCreateNote, useUpdateNote } from "@/hooks/useNoteQuery";
import { useNoteStore } from "@/store/useMemoStore";
import EditNote from "./EditNote";
import NoteMenu from "./NoteMenu";
import NoteHeader from "./NoteHeader";
import NoteTools from "./NoteTools";

type FolderType = {
  id: string;
  name: string;
};

const ViewNote = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLInputElement>(null);
  const [chooseFolder, setChooseFolder] = useState<FolderType | null>(null);
  const note = useNoteStore((state) => state.note);

  const { mutate: createNote } = useCreateNote();
  const { mutate: updateNote } = useUpdateNote();


  const handleSave = () => {
    if (note?.id.length === 0) {
      createNote({
        title: title?.current?.textContent || "",
        text: divRef.current?.innerHTML || "",
        folderId: chooseFolder === null ? null : chooseFolder.id,
      });
    } else {
      updateNote({
        noteId: note?.id || "",
        title: title?.current?.textContent || "",
        text: divRef.current?.innerHTML || "",
        folderId: chooseFolder === null ? note?.folderId : chooseFolder.id,
      });
    }

    setChooseFolder(null);
  };

  return (
    <>
      <NoteHeader
        title={title}
        chooseFolder={chooseFolder}
        setChooseFolder={setChooseFolder}
      />
      <NoteTools divRef={divRef}/>
      {/* NoteArea */}
      <EditNote divRef={divRef} />
      <NoteMenu handleSave={handleSave} />
    </>
  );
};

export default ViewNote;
