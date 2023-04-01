import Error from "@/Error/Error";
import { useNoteQuery, useDeleteNote } from "@/hooks/useNoteQuery";
import NotesLoader from "@/Loader/NotesLoader";
import { useNoteStore } from "@/store/useMemoStore";
import { Trash } from "@phosphor-icons/react";
import EmptyNote from "./EmptyNote";

type noteProp = {
  title: string;
  text: string;
  folderId: string | null;
  id: string;
  updatedAt: string;
};

const Notes = () => {
  const findNote = useNoteStore((state) => state.findNote);

  const { mutate: deleteNote } = useDeleteNote();
  const { data: notes, isLoading, isError } = useNoteQuery();
  if (isLoading) return <NotesLoader />;
  if (isError) return <Error />;
  const filterNotes = notes.filter((note: noteProp) => {
    if (note.folderId === findNote) {
      return true;
    }
    const words = findNote?.trim().split(/\s+/) || [];
    return words.every((word) =>
      note.title.toLowerCase().includes(word.toLowerCase())
    );
  });

  return (
    <div className="px-2 flex-col flex gap-4 overflow-y-scroll scrollbar py-8 scrollbar-w-0 ">
      {filterNotes.length === 0 ? (
        <EmptyNote />
      ) : (
        filterNotes.map((note: noteProp) => (
          <div
            className="rounded-sm border border-[#a3a3a3] p-4 hover:bg-[#787878] px-2 py-2 cursor-pointer relative flex flex-col gap-5"
            key={note.id}
          >
            <div
              onClick={() =>
                useNoteStore.setState({ note: note, toggleNote: true })
              }
            >
              <h1 className="text-3xl font-bold">{note.title}</h1>
              <div
                className="line-clamp-6 mt-6"
                dangerouslySetInnerHTML={{ __html: note.text }}
              ></div>
            </div>
            <div>
              <Trash
                className="absolute inset-0 inset-x-[90%] hover:text-red-600 inset-y-2"
                size={20}
                weight="fill"
                onClick={() => deleteNote({ noteId: note.id })}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Notes;
