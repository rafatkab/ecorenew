import React from "react";
import two from "../images/Home/two.jpg";
import three from "../images/Home/three.jpg";
import accepts from "../images/Home/accepts.jpg";
import tools from "../images/Home/tools.jpg";
import york from "../images/Home/york.jpg";
import conservation from "../images/Home/conservation.jpg";
import newmarket from "../images/Home/newmarket.jpg";

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
      <div className="flex justify-center items-center flex-col text-3xl font-medium pb-12">
        <div className="p-8 font-body">YOU WILL EXPLORE...</div>
        <div className="flex justify-center">
          <img className="w-1/3" src={tools}></img>
          <div className="text-xl w-1/3 ml-10">
            A dynamic course that extends beyond the traditional classroom
            setting, fostering an inclusive environment for experiential
            learning. Through hands-on activities, students will have the
            opportunity to enrich their lives while honing essential soft skills
            such as communication, problem-solving, and stress management.
            Additionally, the course will play a pivotal role in enhancing the
            connection between Bruce's Mills Conservation Park and the local
            community, creating a more engaging and interactive experience for
            all involved.
          </div>
        </div>
      </div>
      <div className="">
        <div className="font-body p-8 text-3xl font-medium text-center">
          WHERE WILL IT BE
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5745.424028561747!2d-79.34707239999999!3d43.944633399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d52b1b4e527feb%3A0xba4556ec86cb516e!2s3291%20Stouffville%20Rd%2C%20Whitchurch-Stouffville%2C%20ON%20L4A%207X5!5e0!3m2!1sen!2sca!4v1719786886194!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-xl w-1/3 ml-10">
            Bruce's Mill Conservation Park 3291 Stouffville Road, Stouffville,
            ON L4A 7X5
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="font-body p-8 text-3xl font-medium text-center">
          OUR PARTNERS
        </div>
        <div className="flex justify-center [&>*]:m-4">
          <img className="h-24" src={york}></img>
          <img className="h-24" src={conservation}></img>
          <img className="h-24" src={newmarket}></img>
        </div>
      </div>
    </div>
  );
}
