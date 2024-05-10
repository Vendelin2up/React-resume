import React from "react";
import StarryBackground from "../components/Stars";
import image from "../components/picTwo.jpg";

export function About() {
  return (
    <div>
      <StarryBackground count={500} />
      <h1>Amanda 'SuperNova' Cyrus</h1>
      <p>
        I am an aspiring frontend developer known for my exceptional
        problem-solving skills and innovative approach to web development. With
        a passion for both coding and outdoor adventure, i bring a dynamic
        energy to my work, drawing inspiration from my explorations in nature to
        fuel my creative solutions in technology. My dedication and zest for
        continuous learning make her a standout candidate in the tech industry."
      </p>
      <p>
        Once, during a mountain biking trip in the Rockies, I took a wrong turn
        and stumbled upon a hidden cave. Inside, I discovered an ancient
        computer terminal, surprisingly still operational. With my frontendn
        developer skills, I managed to power it up, only to find it was running
        software that predicted weather patterns with uncanny accuracy. Amazed
        by my discovery, I used the data to safely navigate my way back through
        an unexpected storm, blending my tech expertise with my adventurous
        spirit in a most unexpected setting.
      </p>
      <p>
        I also holds a Bachelor’s degree in Computer Science and has completed
        multiple certifications in modern web technologies and design
        principles. My portfolio includes innovative projects that showcase my
        proficiency with HTML, CSS, JavaScript, and React. With a proven track
        record of delivering engaging and efficient user interfaces, I am poised
        to bring my unique blend of technical skills and creative vision to the
        forefront of frontend development
      </p>
      <img
        src={image}
        alt="Amanda 'Supernova' Cyrus"
        style={{ maxWidth: "50%" }}
      />
    </div>
  );
}
export default About;
