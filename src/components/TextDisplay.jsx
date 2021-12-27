import React, { useEffect, useState } from "react";
import Microphone from "./Microphone";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const TextDisplay = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const [checkReset, updateReset] = useState(
    localStorage.getItem("reset").toString()
  );

  useEffect(() => {
    window.addEventListener("storage", () => {
      resetTranscript();
      localStorage.setItem("reset", "false");
      updateReset(localStorage.getItem("reset").toString());

      // if (localStorage.getItem("reset") === "true") {
      //   resetTranscript();
      //   localStorage.setItem("reset", "false");
      //   updateReset(localStorage.getItem("reset").toString());
      // } else {
      //   updateReset(localStorage.getItem("reset").toString());
      // }
    });
  }, []);
  return (
    <>
      <div className="text-display-container">
        <h1>This is TextDisplay Component.</h1>
        {transcript && (
          <div className="microphone-result-container">
            <div className="microphone-result-text">{transcript}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default TextDisplay;
