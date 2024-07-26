"use client";
import { useEffect, useState, useMemo } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // dark mode
      return true;
    }
    return false; // FIXME: look into the `prefers-color-scheme: dark` media query
  }, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    console.log(!isDarkMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = () => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
      // document.body.querySelector("profile-header").classList.add("light-font");
      return "☀️";
    } else {
      document.body.classList.remove(darkClassName);
      return "🌙";
    }
  };
  return (
    <div className="light-dark-button">
      {/* <div className="dark-mode"></div> */}
      <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
        {applyTheme()}
      </button>
    </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;
