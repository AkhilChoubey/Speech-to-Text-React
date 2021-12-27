import React from "react";
import Microphone from "./Microphone";
import TextDisplay from "./TextDisplay";
import ThemeSwitcher from "./ThemeSwitcher";

const Home = () => {
  return (
    <>
      <div>
        <ThemeSwitcher />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Microphone />
          <TextDisplay />
        </div>
      </div>
    </>
  );
};

export default Home;
