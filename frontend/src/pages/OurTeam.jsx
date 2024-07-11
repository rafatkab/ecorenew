import React from "react";
import teamPhoto from '../images/Our Team/32a5f1812cf72cb944a690e3d615b8fd.jpg'

export default function OurTeam() {
  return <div>
    <div class="font-body text-4xl text-center">Meet the Team</div>
    <div class="text-lg text-center pt-10">We worked on leveraging connection and social resilience in Bruce's Mill Conservation Park to improve wellness outcomes for our Summer Capstone Project.</div>
    <div className="flex justify-center pt-10">
        <img src={teamPhoto} />
    </div>;
    <div class="text-lg text-center text-blue-600 font-semibold">#blueteamsix</div>
  </div>
}
