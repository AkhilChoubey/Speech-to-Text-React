import React from "react";
import Microphone from "./Microphone";
import TextDisplay from "./TextDisplay";
import ThemeSwitcher from "./ThemeSwitcher";

const Home = () => {
  return (
    <>
      <div>
        <ThemeSwitcher />
        <div className="root-container">
          <Microphone />
          <TextDisplay />
        </div>
      </div>
    </>
  );
};

export default Home;
