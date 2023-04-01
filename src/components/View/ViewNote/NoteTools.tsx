import React, { FC, RefObject } from "react";
import { CalendarPlus } from "@phosphor-icons/react";

interface NoteToolsProps {
  divRef: RefObject<HTMLDivElement> | null;
}

const NoteTools: FC<NoteToolsProps> = ({ divRef }) => {

  const addCurrentDate = () => {
    const currentDate = new Date().toLocaleString();
    divRef?.current?.insertAdjacentHTML(
      "afterbegin",
      `<br/><h3 style="font-weight: bold; text-align: center; border-bottom-width: 1px;border-radius: 0.375rem;  padding-top: 0.5rem;padding-bottom: 0.5rem">${currentDate}</h3>`
    );
  };

  return (
    <div
      className="tooltip tooltip-right  px-2 tooltip-secondary w-10"
      data-tip="Add Current Date"
      onClick={() => addCurrentDate()}
    >
      <CalendarPlus
        className="cursor-pointer"
        size={30}
        color="#d1d1d1"
        weight="light"
      />
    </div>
  );
};

export default NoteTools;
