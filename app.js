const board = document.querySelector("#board");
const colors = [
  "#F08080",
  "#FFA500",
  "#66CDAA",
  "#FFD700",
  "#DDA0DD",
  "#B0E0E6",
  "#FAEBD7",
  "#00FFFF",
  "#FF4500",
  "#FF1493",
  "#1E90FF",
  "#4B0082",
  "#8B008B",
];
const SQUARES_NUMBER = 597;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2p ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
