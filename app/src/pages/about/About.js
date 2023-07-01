import React from "react";
import avatar from "../../assets/images/avatar/avatar-placeholder.jpeg";

export default function About() {
  return (
    <>
      <div>
        <section>
          <h2>About Me</h2>
          <p>
            Nulla ipsum ea consectetur velit eu excepteur aute.Velit do minim
            ullamco qui amet.Non fugiat cillum anim elit qui.Dolor incididunt
            consectetur exercitation ipsum enim incididunt ex occaecat
            occaecat.Pariatur nostrud aliqua nostrud sint id culpa incididunt
            exercitation consectetur consequat dolor Lorem mollit sit.
          </p>
        </section>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div>
        <section>
          <h2>Skills</h2>
          <p>I have average knowledge with the foillowing tools:</p>
          <p>html</p>
          <p>css</p>
          <p>js</p>
        </section>
      </div>
    </>
  );
}
