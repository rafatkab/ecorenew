import React from "react";
import ecorenew from "../images/ecorenew.jpg";

export default function NavBar() {
  const path = location.pathname;

  return (
    <div
      className={
        path == "/"
          ? "absolute flex justify-center text-xl w-screen h-16 flex justify-end items-center bg-transparent font-navbar text-white"
          : "text-xl w-screen h-16 flex justify-end items-center bg-transparent font-navbar"
      }
    >
      <div className="flex p-8 [&>*]:p-1 [&>*]:m-2 [&>a]:border-b-2 [&>a]:border-[#A0C980]">
        <a href="/">Home</a>
        <a href="/ourmission">Our Mission</a>
        <a href="/coursedescription">Course Description</a>
        <a href="/ourteam">Our Team</a>
        <a href="/faq">FAQ</a>
        {path != "/" && (
          <img src={ecorenew} className="absolute top-3 left-2 h-10" />
        )}
      </div>
    </div>
  );
}
