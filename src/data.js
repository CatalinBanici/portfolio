import reactLogo from "./assets/images/logos/react-icon.png";
import reactRouterLogo from "./assets/images/logos/react-router-icon.png";
import formikLogo from "./assets/images/logos/formik-icon.png";
import jsLogo from "./assets/images/logos/js-icon.png";
import reduxLogo from "./assets/images/logos/redux-icon.png";
import tailwindLogo from "./assets/images/logos/tailwind-icon.png";
import swiperLogo from "./assets/images/logos/swiper-logo.svg";

import shoesHubPreview from "./assets/images/project-previews/shoes-hub-preview.jpg";
import countriesPreview from "./assets/images/project-previews/countries-preview.jpg";
import portfolioPreview from "./assets/images/project-previews/portfolio-preview.jpg";

const data = {
  links: {
    linkedin: "https://linkedin.com/in/catalin-banici-a24b40253/",
    github: "https://github.com/CatalinBanici",
    frontEndMentor: "https://www.frontendmentor.io/profile/CatalinBanici",
  },
  bio: "I'm Catalin, a self-taught frontend web developer, passionate about building the user interface of a web application. \n \n I'm looking forward to be part of a team and culture where I can help and cooperate in building amazing projects together while taking my skills to the next level. \n \n You can find me a friendly and loyal person, excited about new challenges and open to feedback. \n \n I'm looking forward to hear from you!",
  skills: [
    {
      skillName: "Java Script",
      skillIcon: jsLogo,
    },
    {
      skillName: "React",
      skillIcon: reactLogo,
    },
    {
      skillName: "Redux",
      skillIcon: reduxLogo,
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: tailwindLogo,
    },
  ],
  projects: [
    {
      name: "Countries",
      preview: countriesPreview,
      description: (
        <p>
          A web application that represents the countries of the world! You can{" "}
          <i>search</i>, <i>filter</i> and <i>sort</i> countries, as well as
          being able to see the details of a particular country. It is based on
          the <i>REST Countries API</i> with the help of <i>RTK-Query</i>. The
          app also features a <i>light / dark</i> theme.
        </p>
      ),
      urlSrc: "https://github.com/CatalinBanici/where-in-the-world-v2",
      urlLive: "https://catalinbanici-countries.netlify.app/",
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
        {
          toolName: "React-Router",
          toolIcon: reactRouterLogo,
        },
        {
          toolName: "RTK-Query",
          toolIcon: reduxLogo,
        },
      ],
    },
    {
      name: "Shoes HUB",
      preview: shoesHubPreview,
      description: (
        <p>
          A client-side web application featuring a shoe store. The app does not
          have a back-end or a database. It is all based on a static JSON file.
          The main purpose was to practice my front-end design and logic skills,
          as well as to learn a little bit of the Redux pattern. The main
          features are: <i>product filtering</i> and <i>sorting</i>,{" "}
          <i>cart functionalities</i>, product gallery with <i>thumbnails</i>{" "}
          and <i>magnifier</i>, client-side <i>form validation</i>, and more.
        </p>
      ),
      urlSrc: "https://github.com/CatalinBanici/shoes-hub-v2",
      urlLive: "https://cb-shoeshub.netlify.app/",
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
        {
          toolName: "React-Router",
          toolIcon: reactRouterLogo,
        },
        {
          toolName: "Redux-Toolkit",
          toolIcon: reduxLogo,
        },
        {
          toolName: "Formik",
          toolIcon: formikLogo,
        },
        {
          toolName: "Swiper",
          toolIcon: swiperLogo,
        },
        {
          toolName: "Tailwind",
          toolIcon: tailwindLogo,
        },
      ],
    },

    {
      name: "Portfolio",
      preview: portfolioPreview,
      description: (
        <p>
          The very project you are on right now! My Portfolio, which showcases a
          little bit about me and the latest work so far throughout my early
          coding journey. The app features a <i>dark / light theme</i> and a
          contact method using <i>EmailJS</i>
        </p>
      ),
      urlSrc: "https://github.com/CatalinBanici/portfolio",
      urlLive: null,
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
        {
          toolName: "React-Router",
          toolIcon: reactRouterLogo,
        },
        {
          toolName: "Formik",
          toolIcon: formikLogo,
        },
      ],
    },
  ],
};

export default data;
