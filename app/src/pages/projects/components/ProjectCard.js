import React from "react";

export default function ProjectCard() {
  return (
    <>
      <div>
        <img
          src="https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img.png"
          alt="project placeholder"
        />
      </div>
      <section>
        <h3>Project name</h3>
        <h4>Description</h4>
        <p>
          Proident ex cupidatat ea qui pariatur et laborum ipsum anim non
          consequat aliqua laboris labore.Ut ex quis laboris id fugiat.Aliqua
          labore nisi enim id commodo proident.Nostrud labore eiusmod ipsum
          mollit.
        </p>
        <hr />
        <h4>Tools used:</h4>
        <p>React Redux-Toolkit</p>
      </section>
    </>
  );
}
