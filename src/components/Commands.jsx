const commands = [
  {
    command: "open *",
    callback: (website) => {
      window.open("https://" + website.split(" ").join(""));
    },
  },
  {
    command: "change background colour to *",
    callback: (color) => {
      document.body.style.background = color;
    },
  },

  {
    command: "reset background colour",
    callback: () => {
      document.body.style.background = `white`;
    },
  },
];

export default commands;
