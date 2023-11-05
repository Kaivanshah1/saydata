import React, { useState } from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { PiTextTBold } from "react-icons/pi";
import { BsBookmark } from "react-icons/bs";

function Metrix() {
  return (
    <div className="flex flex-row space-x-2 mx-auto mt-7 text-2xl text-left relative">
      <div className="w-[301px] h-40 bg-white space-y-3 p-5">
        <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center">
          <AiOutlineFolder />
        </div>
        100
        <p>Uploaded Files</p>
      </div>
      <div className="w-[301px]  h-40 bg-white p-5 space-y-3">
        <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center">
          <PiTextTBold />
        </div>
        50
        <p>Transcribed</p>
      </div>
      <div className="w-[301px] h-40 bg-white p-5 space-y-3">
        <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center">
          <BsBookmark />
        </div>
        20
        <p>Saved</p>
      </div>
    </div>
  );
}

export default Metrix;
