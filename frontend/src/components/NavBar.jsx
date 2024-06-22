import React from "react";

export default function NavBar() {
  return (
    <div className="w-screen h-16 border flex justify-end items-center">
      <div className="flex p-8 [&>*]:p-3">
        <div>Home</div>
        <div>Our Mission</div>
        <div>Course Description</div>
        <div>Our Team</div>
        <div>FAQ</div>
      </div>
    </div>
  );
}
