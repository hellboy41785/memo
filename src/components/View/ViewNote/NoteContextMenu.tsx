import React from "react";
import { ContextMenu, ContextMenuItem, Submenu } from "rctx-contextmenu";

const NoteContextMenu = () => {
  return (
    <div className="absolute z-20 bg-[#333333]">
      <ContextMenu id="my-context-menu-1" className="bg-[#333333] text-black font-bold">
        <Submenu  title="Heading">
          <ContextMenuItem>H1</ContextMenuItem>
          <ContextMenuItem>H2</ContextMenuItem>
        </Submenu>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
        <ContextMenuItem>Menu Item 4</ContextMenuItem>
      </ContextMenu>
    </div>
  );
};

export default NoteContextMenu;
