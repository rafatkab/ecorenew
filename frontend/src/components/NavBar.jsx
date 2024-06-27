import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-screen h-16 border flex justify-end items-center">
      <div className="flex p-8 [&>*]:p-3">
        <a href="/">Home</a>
        <div>Our Mission</div>
        <div>Course Description</div>
        <a href="/ourteam">Our Team</a>
        <div>FAQ</div>
      </div>
    </div>
  );
}
