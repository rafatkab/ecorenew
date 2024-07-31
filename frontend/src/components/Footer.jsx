import React from "react";
import darkleaf from "../../../images/darkleaf.jpg";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="bg-[#A0C980] mt-14">
      <div className="flex justify-evenly items-center py-10">
        <img class="h-20" src={darkleaf} />
        <div class="flex flex-row">
          <div className="flex flex-col mr-20">
            <span className="font-body mb-6 text-xl">CONTACT</span>
            <div class="mb-2">
              <SocialIcon url="https://www.instagram.com/ecorenewofficial/" />
              <span class="ml-2">Instagram</span>
            </div>
            <div>
              <SocialIcon url="mailto:ecorenewofficial@gmail.com" />
              <span class="ml-2">Email</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-body mb-6 text-xl">LOCATION</span>
            <div class="">
              <span class="">Bruce's Mill Conservation Park</span>
            </div>
            <div class="mt-1">
              <span class="text-gray-600">
                3219 Stouffville Road, <br />
                Stouffville, ON
                <br />
                L4A 7X5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
