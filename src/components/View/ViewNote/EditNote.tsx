import React, { FC,RefObject } from "react";
import { useNoteStore } from "@/store/useMemoStore";

interface EditNoteProp {
  divRef: RefObject<HTMLDivElement>
}

const EditNote: FC<EditNoteProp> = ({ divRef }) => {
  const editNote = useNoteStore((state) => state.editNote);
  const note = useNoteStore((state) => state.note);
  return (
    <div className="">
      <div
        contentEditable={editNote}
        className="focus:outline-none  px-3 overflow-y-scroll scrollbar  lg:h-[550px] py-6 prose max-w-6xl relative"
        ref={divRef}
        dangerouslySetInnerHTML={{ __html: note?.text || "" }}
        suppressContentEditableWarning={true}
      ></div>
    </div>
  );
};

export default EditNote;
