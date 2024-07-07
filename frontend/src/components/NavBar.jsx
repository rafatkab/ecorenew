import React from "react";

export default function NavBar() {
  return (
    <div className="absolute flex justify-center text-xl w-screen h-16 flex justify-end items-center bg-transparent font-navbar text-white">
      <div className="flex p-8 [&>*]:p-1 [&>*]:m-2 [&>*]:border-b-2 [&>*]:border-[#A0C980] transition-all">
        <a href="/">Home</a>
        <a href="/ourmission">Our Mission</a>
        <a href="/coursedescription">Course Description</a>
        <a href="/ourteam">Our Team</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>
  );
}
