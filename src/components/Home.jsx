import React from "react";
import Microphone from "./Microphone";
import TextDisplay from "./TextDisplay";
import ThemeSwitcher from "./ThemeSwitcher";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div>
        <ThemeSwitcher />
        <div className="root-container">
          <Microphone />
          <TextDisplay />
        </div>
        <div
          style={{
            width: "20rem",
            bottom: "0",
            position: "absolute",
            /* padding-top: 0.5%; */
            textAlign: "end",
            /* height: 5rem; */
          }}
        >
          <a
            type="button"
            style={{
              border: "1px solid rgb(5 5 5)",
              textDecoration: "none",
              fontSize: "1.5rem",
              padding: "1.5%",
              borderRadius: "25px 25px 0 0",
            }}
            href="https://github.com/AkhilChoubey"
          >
            Know the Develoer <BsGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
