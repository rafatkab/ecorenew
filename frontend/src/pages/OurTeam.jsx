import React from "react";
import teamPhoto from '../images/Our Team/32a5f1812cf72cb944a690e3d615b8fd.jpg'

export default function OurTeam() {
  return <div>
    <div class="text-4xl text-center">Meet the Team</div>
    <div class="pt-10 text-center">We worked on leveraging connection and social resilience in Bruce's Mill Conservation Park to improve wellness outcomes for our Summer Capstone Project.</div>
    <img src={teamPhoto} alt="team" class="center"/>
  </div>;
}
