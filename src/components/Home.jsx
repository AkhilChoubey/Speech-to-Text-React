import React from "react";
import Microphone from "./Microphone";
import TextDisplay from "./TextDisplay";
import ThemeSwitcher from "./ThemeSwitcher";

const Home = () => {
  return (
    <>
      <div>
        <h1>This is Home Component.</h1>
        <ThemeSwitcher />
        <Microphone />
        <TextDisplay />
      </div>
    </>
  );
};

export default Home;
