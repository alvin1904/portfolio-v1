"use client";

import { useEffect, useState } from "react";
import { allViews, themes, views } from "@/data/navbarLinks";
import { getFromLS, sendToLS } from "@/utils/localStorage";
import Loading from "./loading";
import Header from "@/layouts/Header";
import Navbar from "@/layouts/Navbar";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

const applyThemeClass = (theme: string) => {
  const main: HTMLElement | null = document.querySelector("main");
  if (main) {
    if (theme === themes.LIGHT) {
      main.classList.remove("dark");
      main.classList.add("light");
    } else {
      main.classList.remove("light");
      main.classList.add("dark");
    }
  }
};
export default function Home() {
  const [loading, setLoading] = useState(true);
  // THEME CONFIGURATION
  const defaultTheme =
    getFromLS("theme") === themes.LIGHT ? themes.LIGHT : themes.DARK;
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;
    sendToLS("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    applyThemeClass(theme);
    sendToLS("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = getFromLS("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setLoading(false);
    }
  }, []);

  // VIEW CONFIGURATION
  const [view, setView] = useState(views.HOME);
  const toggleView = (view: allViews) => setView(views[view]);

  if (loading) return <Loading />;
  else
    return (
      <main className={"main bg " + theme}>
        <Header view={view.name} />
        {view.name === views["HOME"].name && <Home />}
        {view.name === views["ABOUT"].name && <About />}
        {view.name === views["PROJECTS"].name && <Projects />}
        {view.name === views["CONTACT"].name && <Contact />}
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          toggleView={toggleView}
        />
      </main>
    );
}
