const grid = document.querySelector(".grid-container");
const clearBtn = document.querySelector(".clear");
const borderBtn = document.querySelector(".border");
const input = document.querySelector("input");
const rainbowBtn = document.querySelector(".rainbow");
const grayScaleBtn = document.querySelector(".grayscale");
const eraseBtn = document.querySelector(".erase");


let paint = 'rainbow'

let createGrid = function (size) {
  // create grid
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // create grid squares
  for (let index = 0; index < size * size; index++) {
    const square = document.createElement("div");
    square.className = "square";
    // square.style.border = '1px solid'
    grid.appendChild(square);
  }
};

let onHover = function () {
  // changes color of grid when hovered
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    if (paint == "rainbow") {
      square.addEventListener("mouseover", () => {
        let randomColor = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(
          Math.random() * 254
        )}, ${Math.floor(Math.random() * 254)})`;
        square.style.backgroundColor = randomColor;
      });
    } else if (paint == "grayscale") {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#111";
      });
    } else {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "#fff";
      });
    }
  });
};

let clearGrid = function () {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "#fff";
    square.classList.remove('border-box');
  });
};

let borderToggle = function () {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.toggle('border-box');
  });
}

function startPainting() {
  createGrid(16);
  onHover();

  input.addEventListener("change", () => {
    clearGrid();
    createGrid(input.value);
    onHover();
  });

  rainbowBtn.addEventListener('click', () => {
    paint = 'rainbow'
    onHover()
  })

  grayScaleBtn.addEventListener('click', () => {
    paint = 'grayscale'
    onHover()
  })

  eraseBtn.addEventListener('click', () => {
    paint = 'erase'
    onHover()
  })

  clearBtn.addEventListener('click', clearGrid)

  borderBtn.addEventListener('click', borderToggle)

}

startPainting()
