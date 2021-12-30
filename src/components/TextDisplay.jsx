import React, { useEffect, useState } from "react";
import Microphone from "./Microphone";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const TextDisplay = () => {
  const commands = [
    {
      command: "reset text area",
      callback: () => {
        resetTranscript();
      },
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  const handleReset = () => {
    resetTranscript();
  };

  return (
    <>
      <div style={{ minWidth: "62%", maxWidth: "62%" }}>
        <div className="text-display-container">
          {!transcript && (
            <h1
              style={{
                textAlign: "center",
                color: "#80808061",
                marginTop: "18%",
                fontSize: "3rem",
              }}
            >
              Your Text Will Appear Here.
            </h1>
          )}
          {transcript && (
            <div className="microphone-result-container">
              <div className="microphone-result-text">{transcript}</div>
            </div>
          )}
        </div>
        {transcript && (
          <button
            title="Reset text area"
            className="microphone-reset btn"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default TextDisplay;
