import React, { useState } from "react";
import { BsMicFill } from "react-icons/bs";
import { BsMicMuteFill } from "react-icons/bs";
const Microphone = () => {
  const [checkPlayBtn, setCheckPlayButton] = useState("paused");

  const handleClick = (e) => {
    e.preventDefault();
    if (checkPlayBtn === "paused") {
      setCheckPlayButton("play");
    } else {
      setCheckPlayButton("paused");
    }
  };

  return (
    <>
      <div>
        <h1>This is Microphone Component.</h1>
        <div
          className="microphone-icon-container"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {checkPlayBtn === "play" ? (
            <BsMicFill
              style={{
                width: "53%",
                height: "16rem",
                color: "green",
                padding: "5%",
                borderRadius: "50%",
                backgroundColor: "#eeeeee",
              }}
              title="mute"
            />
          ) : (
            <BsMicMuteFill
              style={{
                width: "53%",
                height: "16rem",
                color: "red",
                padding: "5%",
                borderRadius: "50%",
                backgroundColor: "#eeeeee",
              }}
              title="unmute"
            />
          )}
        </div>
        {checkPlayBtn === "play" ? (
          <p>We are Listening!</p>
        ) : (
          <p>Click to Begin!</p>
        )}
      </div>
    </>
  );
};

export default Microphone;
