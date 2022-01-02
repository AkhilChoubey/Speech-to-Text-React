import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Microphone from "./Microphone";
import { useSpeechRecognition } from "react-speech-recognition";
import { GrPowerReset } from "react-icons/gr";
import { FaCopy } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { MdFileCopy } from "react-icons/md";
import { BiReset } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { GiCheckMark } from "react-icons/gi";

const TextDisplay = () => {
  const [copyToClipboard, setCopyToClipboard] = useState({
    value: "",
    copied: false,
  });

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
              <p
                className="microphone-result-text"
                value={copyToClipboard.value}
                onChange={({ target: { value } }) =>
                  setCopyToClipboard({ value, copied: false })
                }
              >
                {transcript}
              </p>
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
              <VscDebugRestart /> Reset
            </button>
            <div
              style={{
                marginTop: "1%",
                width: "34.5%",
                justifyContent: "space-between",
              }}
            >
              <CopyToClipboard
                text={copyToClipboard.value}
                onCopy={() => setCopyToClipboard({ copied: true })}
              >
                {/* <button>Copy to clipboard with button</button> */}
                <button title="Copy Text" className="microphone-copy btn">
                  {copyToClipboard === true ? (
                    <span>
                      <GiCheckMark /> Copied!
                    </span>
                  ) : (
                    <span>
                      <MdFileCopy /> Copy
                    </span>
                  )}
                </button>
              </CopyToClipboard>

              <button
                title="Download as .txt file"
                className="microphone-download btn"
                onClick={handleReset}
              >
                <IoMdDownload /> Download
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TextDisplay;
