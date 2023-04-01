import {
  FolderSimplePlus,
  FolderOpen,
  TrashSimple,
} from "@phosphor-icons/react";
import {
  useFolderQuery,
  useCreateFolder,
  useDeleteFolder,
} from "@/hooks/useFolderQuery";
import Error from "@/Error/Error";
import { useNoteStore } from "@/store/useMemoStore";
import FolderLoader from "@/Loader/FolderLoader";
import EmptyFolder from "./EmptyFolder";

type folProp = {
  id: string;
  name: string;
};

const Folder = () => {
  const findNote = useNoteStore((state) => state.findNote);
  const { mutate: createFolder } = useCreateFolder();
  const { mutate: deleteFolder } = useDeleteFolder();
  const { data: folder, isLoading, isError } = useFolderQuery();
  if (isLoading) return <FolderLoader />;
  if (isError) return <Error />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b">
        <h1 className="text-lg font-bold">Folder</h1>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <FolderSimplePlus
              className="cursor-pointer"
              size={30}
              color="#d4d4d4"
              weight="fill"
            />
          </label>
          <ul tabIndex={0} className="shadow w-60 dropdown-content menu">
            <input
              type="text"
              placeholder="Press enter to create folder"
              className="w-full rounded input-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const searchText = (e.target as HTMLInputElement).value;
                  searchText.length !== 0 && createFolder({ name: searchText });
                }
              }}
            />
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-scroll-y scrollbar scrollbar-w-0">
        {folder.length === 0 ? (
          <EmptyFolder />
        ) : (
          folder.map((fol: folProp) => (
            <div
              className={`${
                findNote === fol.id
                  ? "flex justify-between bg-primary-focus rounded px-2 py-1 cursor-pointer"
                  : "flex justify-between hover:bg-primary-focus rounded  px-2 py-1 cursor-pointer"
              }`}
              key={fol.id}
              onClick={() => useNoteStore.setState({ findNote: fol.id })}
            >
              <div className="flex items-center gap-1">
                <FolderOpen size={20} color="#d4d4d4" weight="fill" />
                <h1 className="text-lg">{fol.name}</h1>
              </div>
              <div className="flex gap-2 items-center">
                <TrashSimple
                  className="cursor-pointer"
                  size={20}
                  color="#c91313"
                  weight="fill"
                  onClick={() => deleteFolder({ id: fol.id })}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Folder;

