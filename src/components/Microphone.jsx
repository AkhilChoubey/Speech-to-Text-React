import React, { useState, useRef } from "react";
import { BsMicFill } from "react-icons/bs";
import { BsMicMuteFill } from "react-icons/bs";
import commands from "./Commands";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Microphone = () => {
  const [checkPlayBtn, setCheckPlayButton] = useState("paused");

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (checkPlayBtn === "paused") {
      setCheckPlayButton("play");
      microphoneRef.current.classList.add("listening");
      SpeechRecognition.startListening({
        continuous: true,
      });
    } else {
      setCheckPlayButton("paused");
      microphoneRef.current.classList.remove("listening");
      SpeechRecognition.stopListening();
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
