import React from "react";
import sdgThree from "../images/Our Mission/e4a1b742b877a630c792ad1b5745f35e.jpg";
import sdgFour from "../images/Our Mission/d4e1c1687343b9a850cb2c739e441e76.jpg";
import sdgEight from "../images/Our Mission/80a405bb2ecfa495dcbb0a3954f34b12.jpg";
import sdgEleven from "../images/Our Mission/f064898746b577ef64abfdb259903e2d.jpg";
import sdgSeventeen from "../images/Our Mission/5f1b3c4fc2a1cf9cfdb7d73bc7a9273c.jpg";

export default function OurMission() {
  return <div>
    <div class="font-body text-4xl text-center">OUR MISSION</div>
    
    <div class="flex flex-col text-3xl font-medium pt-10 px-20">Our Mission Statement</div>
    <div class="text-lg pt-5 px-20">Our mission is to foster a deep connection between the youth of Stouffville and the natural environment. We aim to inspire and engage young people by providing meaningful opportunities for them to explore, appreciate, and actively participate in preserving the natural beauty of their community. Our two-week course unites York University students, experienced faculty, and community partners—Bruce’s Mill and TRCA—for collaborative, hands-on learning focused on renewing and revitalizing the outdoors. </div>
    
    <div class="flex flex-col text-3xl font-medium pt-10 px-20">What We Aim to Offer the Youth</div>
    <div class="text-lg pt-5 px-20">At EcoRenew, we offer a hands-on course blending woodworking with cyanotype art to spark creativity and teach practical life skills. Participants learn to use carpenter tools, manage stress, and improve communication and teamwork skills. </div>
    
    <div class="flex flex-col text-3xl font-medium pt-10 px-20">Sustainable Development Goals</div>
    <div class="text-lg pt-5 px-20">We are dedicated to creating something we believe in through the inclusivity of ideas and fostering social impact. </div>
    
    <div class="grid grid-cols-6 pt-10 gap-4">
    <img class="col-start-2" src={sdgThree}/>
      <div>The park's natural environment generates positive emotions and acts as a form of ecotherapy
         when activities involve nature. These activities promote wellness because they allow for 
        effective practices for managing mental health through a creative outlet for students.</div>
        <img src={sdgFour}/>
      <div>As our program needs to train individuals to help run the course, our project offers 
        employment opportunities to oversee the program and invite guest speakers from the 
        community that focus on design planning, environmental sustainability, team building 
        and stress management which creates mentorship between the students. </div>
    </div>

    <div class="grid grid-cols-6 pt-10 gap-4">
      <img class="col-start-2" src={sdgEight}/>
      <div>As our program needs to train individuals to help run the course, our project offers employment 
        opportunities to oversee the program and invite guest speakers from the community that focus on 
        design planning, environmental sustainability, team building and stress management which creates 
        mentorship between the students. </div>
        <img src={sdgEleven}/>
      <div>One target that this goal aims to achieve is to provide access to safe and inclusive natural 
        spaces. Bringing this program in to make the park more accessible for activities such as 
        rebuilding platforms for hiking trails or benches for seating can encourage more visitors to 
        come out into Bruce's Mill Conservation Park to enjoy and utilize the green space. </div>
    </div>

  </div>;
}
