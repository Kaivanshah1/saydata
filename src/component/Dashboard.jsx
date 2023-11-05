import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFolder,
  AiOutlineSetting,
  AiOutlineBell,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsBookmark, BsTrash3 } from "react-icons/bs";
import { BiShareAlt, BiHelpCircle } from "react-icons/bi";
import Metrix from "./Metrix";
import Table from "./Table";
import Model from "./Model";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(true);
  };
  return (
    <>
      <div className="flex min-h-screen">
        <section className="border w-1/4 p-5 flex relative bg-white">
          <div className="ml-5 mx-auto space-y-2 text-1xl">
            <p className="mt-5 mb-10">abc firm</p>

            <div className="flex flex-row items-center pb-5 hover:bg-sky-100">
              <AiOutlineHome />
              <span className="ml-2">Home</span>
            </div>

            <div className="flex flex-row items-center pb-5 hover:bg-sky-100">
              <AiOutlineFolder />
              <span className="ml-2">All Files</span>
            </div>

            <div className="flex flex-row items-center pb-5 hover:bg-sky-100">
              <BsBookmark />
              <span className="ml-2">Saved</span>
            </div>

            <div className="flex flex-row items-center pb-5 hover:bg-sky-100">
              <BiShareAlt />
              <span className="ml-2">Integration</span>
            </div>

            <div className="flex flex-row items-center pb-5 hover:bg-sky-100">
              <BsTrash3 />
              <span className="ml-2">Trash</span>
            </div>

            <div className="flex flex-row items-center pb-5 hover:bg-sky-100">
              <AiOutlineSetting />
              <span className="ml-2">Settings</span>
            </div>

            <div className="flex flex-row items-center hover:bg-sky-100">
              <BiHelpCircle />
              <span className="ml-2">Help and Support</span>
            </div>
          </div>

          <section className="flex flex-col justify-center absolute top-80 bottom-0">
            <div className=" bg-sky-100 rounded flex flex-col space-y-2">
              <div className=" mx-auto">
                <h3>Upgrade Account</h3>
              </div>
              <div className=" mx-auto">
                <p className="whitespace-nowrap">
                  Access to Unlimited Transcription
                </p>
              </div>
              <div className=" mx-auto">
                <button className="bg-blue-800 rounded text-white p-1">
                  Upgrade
                </button>
              </div>
            </div>
          </section>
        </section>

        <div className="flex flex-col w-full">
          <section className="border  flex h-14 p-2 relative">
            <div className="flex flex-row items-center">
              <div className="relative flex items-center">
                <div className="absolute left-5 ">
                  <AiOutlineSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[700px] h-10 pr-3 pl-10 rounded-md bg-gray-50 p-2 ml-2"
                />
              </div>

              <div className="w-10 h-10 rounded-full absolute right-12 flex items-center justify-center text-2xl bg-white border">
                <AiOutlineBell />
              </div>
              <div className="w-10 h-10 rounded-full absolute right-1 bg-red-200"></div>
            </div>
          </section>

          <main className="border bg-gray-100 flex-1">
            <div className="ml-10 w-fit mt-8">
              <div className="flex flex-rows relative">
                <div>
                  <h2 className="text-3xl text-black font-bold">
                    Welcome Shakirat
                  </h2>
                  <p className="text-slate-600">
                    Upload your audio and Video to covert to text
                  </p>
                </div>
                <button
                  className="absolute bg-blue-800 rounded text-white p-3 right-0"
                  onClick={handleOpen}
                >
                  Transcribe File
                </button>
              </div>

              <Metrix />
              <Table />
              <Model open={open} setOpen={setOpen} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
