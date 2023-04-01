import React, { FC, RefObject,Dispatch,SetStateAction } from "react";
import { useNoteStore } from "@/store/useMemoStore";
import { useFolderQuery } from "@/hooks/useFolderQuery";
import { Folder,CalendarCheck } from "@phosphor-icons/react";
import Loader from "@/Loader/Loader";


interface FolderTypeProp {
  id: string;
  name: string;
}
interface NoteHeaderProp {
  title: RefObject<HTMLInputElement>;
  chooseFolder: FolderTypeProp | null;
  setChooseFolder: Dispatch<SetStateAction<FolderTypeProp | null>>;
}

const NoteHeader: FC<NoteHeaderProp> = ({
  title,
  chooseFolder,
  setChooseFolder,
}) => {
  const note = useNoteStore((state) => state.note);
  const editNote = useNoteStore((state) => state.editNote);

  const { data: folder, isLoading } = useFolderQuery();
  if (isLoading) return <Loader />;

  const folderName =
    folder.find((el: FolderTypeProp) => el.id === note?.folderId)?.name || null;

  return (
    <div className="flex flex-col w-full gap-5 p-3">
      <div className="flex flex-col gap-5">
        <h1
          className="px-2 text-4xl font-bold prose focus:outline-none"
          contentEditable={editNote}
          suppressContentEditableWarning={true}
          ref={title}
        >
          {note?.title || ""}
        </h1>
        <div>
          {/* Created At */}
          <div className="flex gap-10 items-center border-b border-[#a3a3a3] py-4">
            <div className="flex items-center gap-1">
              <CalendarCheck size={20} color="#908484" weight="fill" />
              <h1 className="text-[#a3a3a3]">Created At</h1>
            </div>

            <h2>
              {note?.updatedAt.substring(0, note?.updatedAt.indexOf("T")) ?? ""}
            </h2>
          </div>

          {/* Folder */}
          <div className="flex items-center gap-16 border-b border-[#a3a3a3] py-4">
            <div className="flex items-center gap-2">
              <Folder size={20} color="#908484" weight="fill" />
              <h1 className="text-[#a3a3a3]">Folder</h1>
            </div>

            <div className="dropdown dropdown-hover dropdown-bottom">
              <label tabIndex={0} className="border-b cursor-pointer">
                {chooseFolder === null
                  ? folderName === null
                    ? "Choose Folder"
                    : folderName
                  : chooseFolder.name}
              </label>
              <ul
                tabIndex={0}
                className="p-2 rounded shadow  dropdown-content menu w-52"
              >
                {folder.map((el: { id: string; name: string }) => (
                  <li
                    className="bg-[#333333]"
                    key={el.id}
                    onClick={() => setChooseFolder(el)}
                  >
                    <a>{el.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteHeader;
