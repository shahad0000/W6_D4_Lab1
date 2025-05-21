import React from "react";

const About = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl mb-4 font-bold">Information About the Academy</h1>
      <p className="text-xl">
        We are an online learning platform committed to helping students grow
        professionally and personally. Our academy brings together skilled
        instructors and up-to-date curriculum to ensure a rewarding learning
        experience.
      </p>
      <hr className="m-5"/>
      <h1 className="text-3xl mb-4 font-bold">Our Mission:</h1>
      <p>To make quality education accessible to everyone, everywhere.</p>

      <hr className="m-4" />

      <h1 className="text-3xl mb-4 font-bold">Our Goals:</h1>

      <ul>
        <li>Provide practical, skill-based learning</li>
        <li>Foster a supportive learning community</li>
        <li>Inspire continuous growth and improvement</li>
      </ul>
    </div>
  );
};

export default About;
