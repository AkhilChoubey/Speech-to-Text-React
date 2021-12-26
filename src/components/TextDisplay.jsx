import React from "react";
import Microphone from "./Microphone";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const TextDisplay = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  return (
    <>
      <div>
        <h1>This is TextDisplay Component.</h1>
        {transcript && (
          <div className="microphone-result-container">
            <div className="microphone-result-text">{transcript}</div>
            <button
              className="microphone-reset btn"
              onClick={Microphone.handleReset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TextDisplay;
