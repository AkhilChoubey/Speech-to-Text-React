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

  // const handleReset = () => {
  //   stopHandle();
  //   resetTranscript();
  // };

  return (
    <>
      <div className="microphone-root-container">
        <div
          className="microphone-icon-container"
          ref={microphoneRef}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {checkPlayBtn === "play" ? (
            <div
              className="microphone-mute-icon"
              style={{
                width: "100%",
                height: "100%",

                textAlign: "center",
                borderRadius: "50%",

                zIndex: 100000,
              }}
              title="mute"
            >
              <BsMicFill
                className="big-micro-btn"
                style={{ width: "80%", height: "80%", marginTop: "8%" }}
              />
            </div>
          ) : (
            <div
              className="microphone-unmute-icon"
              style={{
                width: "100%",
                height: "100%",

                textAlign: "center",
                borderRadius: "50%",
              }}
              title="unmute"
            >
              <BsMicMuteFill
                className="big-micro-btn"
                style={{
                  width: "80%",
                  height: "80%",
                  marginTop: "8%",
                }}
                title="unmute"
              />
            </div>
          )}
        </div>
        {checkPlayBtn === "play" ? (
          <p> Listening....</p>
        ) : (
          <p>
            Click{" "}
            <span>
              <BsMicMuteFill className="mute-icon" />
            </span>{" "}
            to Start
          </p>
        )}
      </div>
    </>
  );
};

export default Microphone;
