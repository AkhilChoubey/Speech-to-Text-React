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
import { MdFileDownloadDone } from "react-icons/md";

const TextDisplay = () => {
  const [copyToClipboard, setCopyToClipboard] = useState({
    value: "",
    copied: false,
  });

  const [isDownloaded, setDownloaded] = useState(false);

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

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript.toString()], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "SpeechToText.txt";
    document.body.appendChild(element);
    element.click();

    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 2000);
  };

  return (
    <>
      <div className="text-root-container">
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
              <div
                className="microphone-result-text"
                value={copyToClipboard.value}
                onChange={(e) => {
                  const updatedValue = e.target.value;
                  console.log(updatedValue);
                  console.log(toString(updatedValue));
                  setCopyToClipboard({ updatedValue, copied: false });
                }}
              >
                {transcript}
              </div>
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
              <VscDebugRestart className="big-micro-btn" /> Reset
            </button>
            <div
              style={{
                marginTop: "1%",
                width: "40%",
                justifyContent: "space-between",
              }}
            >
              <CopyToClipboard
                text={transcript}
                onCopy={() => {
                  setCopyToClipboard({ copied: true });
                  setTimeout(() => {
                    setCopyToClipboard({ copied: false });
                  }, 2000);
                }}
              >
                {/* <button>Copy to clipboard with button</button> */}
                <button title="Copy Text" className="microphone-copy btn">
                  {copyToClipboard.copied === true ? (
                    <span>
                      <GiCheckMark className="big-micro-btn" /> Copied!
                    </span>
                  ) : (
                    <span>
                      <MdFileCopy className="big-micro-btn" /> Copy
                    </span>
                  )}
                </button>
              </CopyToClipboard>

              <button
                title="Download as .txt file"
                className="microphone-download btn"
                onClick={downloadTxtFile}
              >
                {isDownloaded === true ? (
                  <span>
                    <MdFileDownloadDone className="big-micro-btn" /> Downloaded
                  </span>
                ) : (
                  <span>
                    <IoMdDownload className="big-micro-btn" /> Download
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TextDisplay;
