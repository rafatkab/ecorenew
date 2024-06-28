import React from "react";
import two from "../images/Home/two.jpg";
import three from "../images/Home/three.jpg";
import accepts from "../images/Home/accepts.jpg";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col bg-[url('/src/images/Home/house.jpg')] h-screen ">
        <div className="p-6 text-8xl text-white font-body w-3/5 text-center border-b-[15px] border-[#A0C980]">
          ECORENEW: CREATING SUSTAINABILITY AND ART
        </div>
        <button class=" mt-10 text-2xl bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
          Register Now
        </button>
      </div>
      <div className="font-body text-5xl flex justify-center items-center flex-col">
        <div className="pt-12">OUR COURSE STATEMENT</div>
        <div className="italic p-8 w-2/4 text-center font-sans text-xl italics">
          Committed to fostering social resilience and connections by promoting
          inclusive student engagement through outdoor activities and community
          interactions.{" "}
        </div>
      </div>
      <div className="flex justify-center items-center p-8 bg-[#A0C980]">
        <button className=" text-2xl bg-transparent  hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-black rounded">
          WATCH OUR VIDEO
        </button>
      </div>
      <div className="flex justify-center items-center flex-col font-body text-3xl font-medium p-10">
        <div className="p-8">AT A GLANCE</div>
        <div className="flex justify-around items-center">
          <img className="w-1/4 h-[30rem]" src={two} />
          <img className="w-1/4 h-[30rem]" src={three} />
          <img className="w-1/4 h-[30rem]" src={accepts} />
        </div>
      </div>
    </div>
  );
}
