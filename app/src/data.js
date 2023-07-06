import reactLogo from "./assets/images/logos/react-icon.png";
import reactRouterLogo from "./assets/images/logos/react-router-icon.png";
import formikLogo from "./assets/images/logos/formik-icon.png";

import spaceTourismWebsitePreview from "./assets/images/project-previews/space-tourism-website-preview.jpg";
import advancedTodoListAppPreview from "./assets/images/project-previews/advanced-todo-list-app-preview.jpg";
import multiStepFormPreview from "./assets/images/project-previews/multi-step-form-preview.jpg";
import whereInTheWorld from "./assets/images/project-previews/where-in-the-world-preview.jpg";

const data = {
  projects: [
    {
      name: "Space Tourism Website",
      preview: spaceTourismWebsitePreview,
      description:
        "Proident ex cupidatat ea qui pariatur et laborum ipsum anim non consequat aliqua laboris labore.Ut ex quis laboris id fugiat.Aliqua labore nisi enim id commodo proident.Nostrud labore eiusmod ipsum mollit.",
      urlSrc: "https://github.com/CatalinBanici/space-tourism-website",
      urlLive: "https://fem-cb-space-tourism-website.netlify.app",
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
        {
          toolName: "React-Router",
          toolIcon: reactRouterLogo,
        },
      ],
    },
    {
      name: "Advanced Todo List App",
      preview: advancedTodoListAppPreview,
      description:
        "Proident ex cupidatat ea qui pariatur et laborum ipsum anim non consequat aliqua laboris labore.Ut ex quis laboris id fugiat.",
      urlSrc: "https://github.com/CatalinBanici/advanced-todo-app",
      urlLive: "https://fem-cb-advanced-todo-app.netlify.app/",
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
      ],
    },
    {
      name: "Multi-Step Form",
      preview: multiStepFormPreview,
      description:
        "Proident ex cupidatat ea qui pariatur et laborum ipsum anim non consequat aliqua laboris labore.Ut ex quis laboris id fugiat.Aliqua labore nisi enim id commodo proident.Nostrud labore eiusmod ipsum mollit.",
      urlSrc: "https://github.com/CatalinBanici/multi-step-form",
      urlLive: "https://fem-cb-multi-step-form.netlify.app",
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
        {
          toolName: "Formik",
          toolIcon: formikLogo,
        },
      ],
    },
    {
      name: "Where in the World?",
      preview: whereInTheWorld,
      description:
        "Proident ex cupidatat ea qui pariatur et laborum ipsum anim non consequat aliqua laboris labore.Ut ex quis laboris id fugiat.Aliqua labore nisi enim id commodo proident.Nostrud labore eiusmod ipsum mollit.Aliqua labore nisi enim id commodo proident.Nostrud labore eiusmod ipsum mollit.Aliqua labore nisi enim id commodo proident.Nostrud labore eiusmod ipsum mollit.",
      urlSrc: "https://github.com/CatalinBanici/where-in-the-world",
      urlLive: "https://fem-cb-where-in-the-world.netlify.app/",
      tools: [
        {
          toolName: "React",
          toolIcon: reactLogo,
        },
        {
          toolName: "React-Router",
          toolIcon: reactRouterLogo,
        },
      ],
    },
  ],
};

export default data;
