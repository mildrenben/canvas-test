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
  EntityManager[0] = new StaticCircle({
    x: 150,
    y: 150,
    id: 0,
    radius: 40,
    color: "#CFBAE1",
    xvelocity: 0,
    yvelocity: 0
  });
  EntityManager[1] = new StaticCircle({
    x: 450,
    y: 450,
    id: 1,
    radius: 40,
    color: "#CFBAE1",
    xvelocity: 0,
    yvelocity: 0
  });
  EntityManager[2] = new Line();
  animate();
}

init();
