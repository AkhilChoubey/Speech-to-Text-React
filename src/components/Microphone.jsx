import React, { useState } from "react";
import { BsMicFill } from "react-icons/bs";
import { BsMicMuteFill } from "react-icons/bs";
const Microphone = () => {
  const [checkPlayBtn, setCheckPlayButton] = useState("play");

  return (
    <>
      <div>
        <h1>This is Microphone Component.</h1>
        <div></div>
        <BsMicFill />
      </div>
    </>
  );
};

export default Microphone;
