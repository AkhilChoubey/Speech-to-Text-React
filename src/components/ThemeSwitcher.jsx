import React, { useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeSwitcher = () => {
  const { switcher, themes, currentTheme } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // if (status === "loading") {
  //   return <div>Loading styles...</div>;
  // }

  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      return !previous;
    });
  };

  return (
    <>
      <div style={{ marginTop: "1%", textAlign: "center", height: "4rem" }}>
        {/* <h1>This is ThemeSwitcher Component. {currentTheme}</h1> */}

        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={currentTheme === "dark" ? false : true}
          size={80}
        />
      </div>
    </>
  );
};

export default ThemeSwitcher;
