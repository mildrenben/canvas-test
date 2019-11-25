import canvas from "../utilities/canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
import context from "../utilities/context";
import StaticCircle from "../components/StaticCircle";
import Line from "../components/Line";

const STANDARD_VELOCITY: number = 1;
const STANDARD_RADIUS: number = 10;
const CANVAS_WIDTH: number = window.innerWidth;
const CANVAS_HEIGHT: number = window.innerHeight;

export let EntityManager: any[] = [];

function clear(): void {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function animate(): void {
  requestAnimationFrame(animate);
  clear();
  EntityManager.forEach(entity => {
    entity.update();
    entity.render();
  });
}

function init(): void {
  EntityManager[0] = new StaticCircle(150, 150, 0, 40);
  EntityManager[1] = new StaticCircle(450, 450, 1, 40);
  EntityManager[2] = new Line({ x: 5, y: 5 }, { x: 100, y: 200 });
  animate();
}

init();
