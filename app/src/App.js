import { createContext, useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootPage from "./pages/root-page/RootPage";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

export const AppContext = createContext("");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  const STORED_THEME = localStorage.getItem("theme-key")
    ? JSON.parse(localStorage.getItem("theme-key"))
    : "light";

  const [theme, setTheme] = useState(STORED_THEME);

  useEffect(() => {
    localStorage.setItem("theme-key", JSON.stringify(theme));
  }, [theme]);

  function themeChanger() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div
      data-theme={theme}
      className={theme === "light" ? "app light" : "app dark"}
    >
      <div className="app-container">
        <AppContext.Provider value={{ theme, setTheme, themeChanger }}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
