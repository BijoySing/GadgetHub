// ThemeToggle.js
import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'light' : 'dark'
    );
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
