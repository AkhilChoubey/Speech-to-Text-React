import React, { useState } from "react";
import { BsMicFill } from "react-icons/bs";
import { BsMicMuteFill } from "react-icons/bs";
const Microphone = () => {
  const [checkPlayBtn, setCheckPlayButton] = useState("play");

  const handleClick = (e) => {
    e.preventDefault();
    if (checkPlayBtn === "play") {
      setCheckPlayButton("paused");
    } else {
      setCheckPlayButton("play");
    }
  };

  return (
    <>
      <div>
        <h1>This is Microphone Component.</h1>
        <div onClick={handleClick}>
          {checkPlayBtn === "play" ? <BsMicFill /> : <BsMicMuteFill />}
        </div>
      </div>
    </>
  );
};

export default Microphone;
