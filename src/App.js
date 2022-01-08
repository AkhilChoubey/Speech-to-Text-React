import React from "react";
// import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  light: "/light.css",
  dark: "/dark.css",
};
function App() {
  return (
    <div className="App">
      <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Router>
      </ThemeSwitcherProvider>
    </div>
  );
}

export default App;
