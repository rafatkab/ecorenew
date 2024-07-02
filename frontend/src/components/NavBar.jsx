import React from "react";

export default function NavBar() {
  return (
    <div className="w-screen h-16 border flex justify-end items-center">
      <div className="flex p-8 [&>*]:p-3">
        <a href="/">Home</a>
        <a href="/ourmission">Our Mission</a>
        <a href="/coursedescription">Course Description</a>
        <a href="/ourteam">Our Team</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>
  );
}
