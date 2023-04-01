import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  toggleNote: boolean;
  findNote: string | null;
  editNote: boolean;
  note: null | {
    title: string;
    text: string;
    folderId: string | null;
    id: string;
    updatedAt: string;
  };
}

export const useNoteStore = create<BearState>()(
  devtools((set) => ({
    toggleNote: false,
    findNote: null,
    note: null,
    editNote: false,
  }))
);
