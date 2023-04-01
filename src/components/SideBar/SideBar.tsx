import Search from "../Search/Search";
import User from "../User/User";
import Folder from "../Folder/Folder";
import Notes from "../Notes/Notes";
import AllNote from "../AllNote/AllNote";

const SideBar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="relative flex flex-col  gap-2 mt-2 drawer-content">
        <Search />
        <Notes />
      </div>
      <div className=" drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="flex flex-col gap-10 p-4 border-r border-gray-700 menu w-80 bg-base-100">
          <User />
          <div className="space-y-2">
            <AllNote />
            <Folder />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
