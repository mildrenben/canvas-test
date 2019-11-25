interface IMouse {
  x?: number;
  y?: number;
  lastX?: number;
  lastY?: number;
  clicked: boolean;
}

const mouse: IMouse = {
  lastX: undefined,
  lastY: undefined,
  x: undefined,
  y: undefined,
  clicked: false
};

document.addEventListener("mousedown", () => (mouse.clicked = true));

document.addEventListener("mouseup", x => {
  mouse.clicked = false;
});

document.addEventListener("mousemove", ({ x, y }) => {
  mouse.lastX = mouse.x;
  mouse.lastY = mouse.y;
  mouse.x = x;
  mouse.y = y;
});

export default mouse;
