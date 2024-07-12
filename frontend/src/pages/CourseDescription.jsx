import React from "react";
import classrooms from "../images/Course Description/8e3a5b6fc5d8f5d9fa4d3bd3f33f1a45.jpg"
export default function CourseDescription() {
  return <div>
    <div class="font-body text-4xl text-center flex flex-col">Course Overview</div>

    <img class="px-20 pt-14 flex" src={classrooms} /> {/*Image is too large for some reason*/}

    <div class="flex flex-col text-3xl font-medium pt-10 px-20">Course Overview</div>
    <div class="text-lg pt-5 px-20">Join us for an exciting woodworking and art workshop to learn
      life and social skills. Build projects in teams of up to 5 people in a class of up to 25
      students. Develop artistic skills such as environmental art, carpentry and design planning
      that are transferable to the workplace and enhance your creativity and craftsmanship. Discover
      the joy of creating with your hands while collaborating with others.</div>

    <div class="flex flex-col text-3xl font-medium pt-10 px-20">Course Learning Objectives</div>
    <ul class="text-lg pt-5 px-20 list-disc">
      <li>Explore various mediums, such as visual art and storytelling, to convey sustainability narratives to diverse audiences.</li>
      <li>Master the art of carpentry, from basic techniques to advanced skills.</li>
      <li>Incorporate cyanotype into woodwork to create stunning imagery.</li>
      <li>Promote interdisciplinary collaboration and provide hands-on experiences that promote the development of life and soft skills such as stress management and communication.</li>
      <li>Conduct safety measures similar to the real workplace.</li>
      <li>Engage in brainstorming sessions, design thinking exercises, and collaborative projects to generate creative solutions.</li>
      <li>Experiment with eco-friendly materials and methods to create artwork while minimizing environmental impact.</li>
      <li>Receive guidance and mentorship from experienced instructors.</li>
    </ul>

    <div class="flex flex-col text-3xl font-medium pt-10 px-20">Course Assessments</div>
    <ul class="text-lg pt-5 px-20 list-disc">
      <li>Project Portfolio: The development of a portfolio of creative projects is a testament to students' understanding of critical concepts and their ability to apply artistic techniques.</li>
      <li>Critical Reflections: Written reflections and discussions will encourage students to critically analyze their artistic process, ethical considerations, and the potential impact of their work on sustainability and awareness.</li>
      <li>Presentation and Exhibition: The culminating presentation or exhibition is not just a showcase of students artwork, but a platform for students to engage with peers and the broader community. It's an opportunity to spark conversations about creating green spaces for learning and receive valuable feedback on students' work.</li>
    </ul>
  </div>
}
