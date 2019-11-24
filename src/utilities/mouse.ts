interface IMouse {
  x?: number;
  y?: number;
}

const mouse: IMouse = {
  x: undefined,
  y: undefined
};

document.addEventListener("mousemove", ({ x, y }) => {
  mouse.x = x;
  mouse.y = y;
});

export default mouse;
