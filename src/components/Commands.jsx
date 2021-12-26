import Microphone from "./Microphone";

// const handleReset = () => {
//   stopHandle();
//   resetTranscript();
// };

const commands = [
  {
    command: "open *",
    callback: (website) => {
      window.open("http://" + website.split(" ").join(""));
    },
  },
  {
    command: "change background colour to *",
    callback: (color) => {
      document.body.style.background = color;
    },
  },
  {
    command: "reset",
    callback: () => {
      Microphone.handleReset();
    },
  },
  ,
  {
    command: "reset background colour",
    callback: () => {
      document.body.style.background = `white`;
    },
  },
];

export default commands;
