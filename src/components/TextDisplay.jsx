import React from "react";
import Microphone from "./Microphone";
const TextDisplay = () => {
  return (
    <>
      <div>
        <h1>This is TextDisplay Component.</h1>
        {Microphone.transcript && (
          <div className="microphone-result-container">
            <div className="microphone-result-text">
              {Microphone.transcript}
            </div>
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
