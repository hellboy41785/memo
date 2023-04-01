import React, { FC, RefObject } from "react";
import { useNoteStore } from "@/store/useMemoStore";

interface EditNoteProp {
  divRef: RefObject<HTMLDivElement>;
}

const EditNote: FC<EditNoteProp> = ({ divRef }) => {
  const editNote = useNoteStore((state) => state.editNote);
  const note = useNoteStore((state) => state.note);
  return (
    <div
      contentEditable={editNote}
      className="focus:outline-none px-3 lg:h-[550px] py-6 prose lg:max-w-6xl"
      ref={divRef}
      dangerouslySetInnerHTML={{ __html: note?.text || "" }}
      suppressContentEditableWarning={true}
    ></div>
  );
};

export default EditNote;
