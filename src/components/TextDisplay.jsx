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
          <div className="button-container">
            <button
              title="Reset text area"
              className="microphone-reset btn"
              onClick={handleReset}
            >
              Reset
            </button>
            <div
              style={{
                marginTop: "1%",
                width: "30.5%",
                justifyContent: "space-between",
              }}
            >
              <button
                title="Copy text area"
                className="microphone-copy btn"
                onClick={handleReset}
              >
                Copy
              </button>
              <button
                title="Download text area"
                className="microphone-download btn"
                onClick={handleReset}
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TextDisplay;
