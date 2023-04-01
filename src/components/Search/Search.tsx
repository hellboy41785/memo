import { List, Plus } from "@phosphor-icons/react";
import { useNoteStore } from "@/store/useMemoStore";

const Search = () => {
  return (
    <>
      <label
        htmlFor="my-drawer-2"
        className="absolute cursor-pointer drawer-button lg:hidden"
      >
        <List className="mt-4 ml-2" size={45} color="#fefefe" weight="fill" />
      </label>
      <div className="w-full p-2 mt-1">
        <input
          type="text"
          placeholder="Search here"
          className="w-full p-4 rounded px-14 lg:px-3"
          onChange={(e) => useNoteStore.setState({ findNote: e.target.value })}
        />
      </div>
      <Plus
        className="absolute inset-0 inset-x-[86%] mt-4 cursor-pointer"
        size={45}
        color="#d4d4d4"
        weight="fill"
        onClick={() =>
          useNoteStore.setState({
            toggleNote: true,
            editNote: true,
            note: {
              title: "Type Your Heading",
              id: "",
              folderId: null,
              text: "Type your note....",
              updatedAt: "",
            },
          })
        }
      />
    </>
  );
};

export default Search;
