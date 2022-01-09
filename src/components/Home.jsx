import React from "react";
import Microphone from "./Microphone";
import TextDisplay from "./TextDisplay";
import ThemeSwitcher from "./ThemeSwitcher";
import { BsGithub } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div>
        <ThemeSwitcher />
        <div className="root-container">
          <Microphone />
          <TextDisplay />
        </div>
        <div className="developer-container">
          <a
            type="button"
            // style={{
            //   border: "1px solid rgb(5 5 5)",
            //   textDecoration: "none",
            //   fontSize: "1.5rem",
            //   padding: "1.5%",
            //   borderRadius: "25px 25px 0 0",
            // }}
            href="https://github.com/AkhilChoubey"
          >
            Know the Develoer{" "}
            <BsGithub style={{ fontSize: "1.5rem" }} className="mute-icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
