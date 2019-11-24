import canvas from "../utilities/canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
import context from "../utilities/context";
import Circle from "../components/Circle";

const STANDARD_VELOCITY: number = 1;
const STANDARD_RADIUS: number = 10;
const CANVAS_WIDTH: number = window.innerWidth;
const CANVAS_HEIGHT: number = window.innerHeight;

const COLORS: string[] = [
  "#725752",
  "#878E88",
  "#F0544F",
  "#FDF0D5",
  "#BBE1C3"
];

let state: Circle[] = [];

function clear(): void {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function animate(): void {
  requestAnimationFrame(animate);
  clear();
  state.forEach(entity => {
    entity.update();
    entity.render();
  });
}

function init(): void {
  for (let i = 1; i < 800; i++) {
    state.push(
      new Circle(
        Math.random() * CANVAS_WIDTH,
        Math.random() * CANVAS_HEIGHT,
        Math.random() * STANDARD_VELOCITY * (Math.random() > 0.5 ? 1 : -1),
        Math.random() * STANDARD_VELOCITY * (Math.random() > 0.5 ? 1 : -1),
        COLORS[Math.floor(Math.random() * COLORS.length)],
        Math.random() * STANDARD_RADIUS,
        state.length
      )
    );
  }
  animate();
}

init();
