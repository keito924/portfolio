"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import "./Switcher.css";
import PropTypes from "prop-types";

const Switcher = ({ darkClassName = "dark-mode" }) => {
  const prefersDarkMode = useMemo(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      applyTheme();
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const applyTheme = useCallback(() => {
    if (isDarkMode) {
      document.body.classList.add(darkClassName);
    } else {
      document.body.classList.remove(darkClassName);
    }
  }, [isDarkMode, darkClassName]);

  return (
    <div className="light-dark-button">
      <button onClick={toggleTheme} className="btn" data-testid="themeSwitcherButton">
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

Switcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default Switcher;
