import React, { useContext } from "react";
import avatar from "../../assets/images/avatar/avatar-placeholder.jpeg";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import "./About.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function About() {
  const { data } = useContext(AppContext);
  return (
    <div className="about-container">
      <div className="avatar-bio-container">
        <div className="avatar-container">
          <img src={avatar} alt="avatar" />
        </div>
        <section className="bio-container">
          <p>{data.bio}</p>
        </section>
      </div>
      <div className="links-skills-container">
        <div className="links-container">
          <Link target="blank" to={data.links.linkedin}>
            <BsLinkedin />
          </Link>
          <Link target="blank" to={data.links.github}>
            <BsGithub />
          </Link>
        </div>
        <section className="skills-container">
          <h3>Main skills:</h3>
          <div className="skills-wrapper">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <p>{skill?.skillName}</p>
                <img src={skill?.skillIcon} alt={`${skill?.skillName} Logo`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
