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
              style={{
                width: "100%",
                height: "100%",
                color: "green",
                textAlign: "center",
                borderRadius: "50%",
                backgroundColor: "#eeeeee",
                zIndex: 100000,
              }}
              title="mute"
            >
              <BsMicFill
                style={{ width: "80%", height: "80%", marginTop: "8%" }}
              />
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                color: "red",
                textAlign: "center",
                borderRadius: "50%",
                backgroundColor: "#eeeeee",
              }}
            >
              <BsMicMuteFill
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
          <p style={{ margin: 0, fontSize: "3rem", textAlign: "center" }}>
            {" "}
            Listening....
          </p>
        ) : (
          <p style={{ margin: 0, fontSize: "3rem", textAlign: "center" }}>
            Click{" "}
            <span style={{ fontSize: "2.5rem" }}>
              <BsMicMuteFill style={{ transition: "0s" }} />
            </span>{" "}
            to Start
          </p>
        )}
      </div>
    </>
  );
};

export default Microphone;
