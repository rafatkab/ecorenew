import React from "react";
import ecorenew from "../images/ecorenew.jpg";

export default function NavBar() {
  const path = location.pathname;

  return (
    <div
      className={
        path == "/"
          ? "absolute flex justify-center text-xl w-screen h-16 flex justify-end items-center bg-transparent font-navbar text-white"
          : "mb-10 text-xl w-screen h-[6rem] flex justify-between items-center bg-lime-300 font-navbar"
      }
    >
      {path != "/" && <img src={ecorenew} className="ml-4 h-10" />}
      <div className="flex justify-center p-8 [&>*]:m-1 [&>*]:rounded-md">
        <div className="bg-lime-600 p-2" href="/">
          Dashboard
        </div>
        <a className="hover:bg-lime-400 p-2" href="/">
          Home
        </a>
        <a className="hover:bg-lime-400 p-2" href="/ourmission">
          Our Mission
        </a>
        <div class="flex flex-col hover:bg-lime-400">
          <div>
            <a className="peer" href="/coursedescription">
              <button className="p-2">Course Description</button>
            </a>
            <div
              class="rounded-md [&>*]:rounded-md [&>*]:p-2 [&>*]:bg-lime-500 absolute hidden peer-hover:flex hover:flex
         flex-col "
            >
              <a class="hover:bg-gray-200" href="/courseoutline">
                Course Outline
              </a>
              <a class="hover:bg-gray-200" href="imagearchive">
                Image Archive
              </a>
            </div>
          </div>
        </div>
        <a className="hover:bg-lime-400 p-2" href="/ourteam">
          Our Team
        </a>
        <a className="hover:bg-lime-400 p-2" href="/faq">
          FAQ
        </a>
      </div>
    </div>
  );
}
