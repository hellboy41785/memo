import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface updateNoteProp {
  noteId: string;
  title: string;
  text: string;
  folderId?: string | null;
}
interface createNoteProp {
  title: string;
  text: string;
  folderId?: string | null;
}

const fetchNote = async () => {
  const res = await axios.get(`/api/memo/note`);
  return res.data;
};

const createNote = async ({ title, text, folderId }: createNoteProp) => {
  await axios.post(`/api/memo/note`, {
    title,
    text,
    folderId,
  });
};
const updateNote = async ({
  title,
  text,
  folderId,
  noteId,
}: updateNoteProp) => {
  await axios.patch(`/api/memo/note`, {
    title,
    text,
    folderId,
    noteId,
  });
};
const deleteNote = async ({ noteId }: { noteId: string }) => {
  await axios.delete(`/api/memo/note`, {
    data: {
      noteId,
    },
  });
};

// ...................Query....................

export const useNoteQuery = () => {
  return useQuery({
    queryKey: ["note"],
    queryFn: () => fetchNote(),
    staleTime: Infinity,
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
    },
  });
};
export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
    },
  });
};
export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["note"] });
    },
  });
};
