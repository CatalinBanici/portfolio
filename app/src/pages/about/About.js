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
    <>
      <div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <section>
          <p>{data.bio}</p>
        </section>
      </div>
      <div>
        <div>
          <Link target="blank" to={data.links.linkedin}>
            <BsLinkedin />
          </Link>
          <Link target="blank" to={data.links.github}>
            <BsGithub />
          </Link>
        </div>
        <section>
          <h3>Main skills:</h3>
          {data.skills.map((skill, index) => (
            <div key={index}>
              <p>{skill?.skillName}</p>
              <img src={skill?.skillIcon} alt={`${skill?.skillName} Logo`} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
