const container = document.querySelector("#container");
const canvas = document.querySelector("#canvas");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Tile Grid";
container.appendChild(resetBtn);

resetBtn.addEventListener("click", () => {
  let num = prompt("choose grid size (not greater than 100): ");
  while (num > 100) {
    num = prompt("choose grid size (not greater than 100): ");
  }
  removeElementsByClass("row");
  removeElementsByClass("grid");
  play(num);
});

const createGrid = (num) => {
  for (let i = 0; i < num; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    canvas.appendChild(rowDiv);
    for (let j = 0; j < num; j++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      rowDiv.appendChild(div);
    }
  }
};
const checkHover = () => {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
      e.srcElement.style.backgroundColor = "red";
    });
  });
};

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function play(num) {
  createGrid(num);
  checkHover();
}

play(16);
