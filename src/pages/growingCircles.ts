import canvas from "../utilities/canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
import context from "../utilities/context";
import GrowingCircle from "../components/GrowingCircle";

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

let state: GrowingCircle[] = [];

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
      new GrowingCircle({
        x: Math.random() * CANVAS_WIDTH,
        y: Math.random() * CANVAS_HEIGHT,
        xvelocity:
          Math.random() * STANDARD_VELOCITY * (Math.random() > 0.5 ? 1 : -1),
        yvelocity:
          Math.random() * STANDARD_VELOCITY * (Math.random() > 0.5 ? 1 : -1),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        radius: Math.random() * STANDARD_RADIUS,
        id: state.length
      })
    );
  }
  animate();
}

init();
