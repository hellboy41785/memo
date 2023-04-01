import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";



const fetchFolder = async () => {
  const res = await axios.get(`/api/memo/folder`);
  return res.data;
};

const createFolder = async ({ name }: {name:string}) => {
  await axios.post(`/api/memo/folder`, {
    name: name,
  });
};
const deleteFolder = async ({ id }: {id:string}) => {
  await axios.delete(`/api/memo/folder`, {
    data:{
      id:id
    }
  });
};

// ..........Query..................

export const useFolderQuery = () => {
  return useQuery({
    queryKey: ["folder"],
    queryFn: () => fetchFolder(),
    staleTime: Infinity,
  });
};

export const useCreateFolder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folder"] });
    },
  });
};
export const useDeleteFolder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folder"] });
    },
  });
};
