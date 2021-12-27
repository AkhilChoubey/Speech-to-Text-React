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

  const stopHandle = () => {
    setCheckPlayButton(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <>
      <div>
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {checkPlayBtn === "play" ? (
            <BsMicFill
              style={{
                width: "92%",
                height: "6rem",
                color: "green",
                padding: "4%",
                borderRadius: "50%",
                backgroundColor: "#eeeeee",
                zIndex: 100000,
              }}
              title="mute"
            />
          ) : (
            <BsMicMuteFill
              style={{
                width: "92%",
                height: "6rem",
                color: "red",
                padding: "4%",
                borderRadius: "50%",
                backgroundColor: "#eeeeee",
              }}
              title="unmute"
            />
          )}
        </div>
        {checkPlayBtn === "play" ? (
          <p> Listening....</p>
        ) : (
          <p>Click to Begin!</p>
        )}
        <button className="microphone-reset btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Microphone;
