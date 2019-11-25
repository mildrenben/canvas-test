import canvas from "../utilities/canvas";
import context from "../utilities/context";
import mouse from "../utilities/mouse";
import { EntityManager } from "../pages/staticCircleCollision";

const MINIMUM_RADIUS: number = 3;
const MAXIMUM_RADIUS: number = 50;
const CANVAS_WIDTH: number = window.innerWidth;
const CANVAS_HEIGHT: number = window.innerHeight;
export const INITIAL_COLOR: string = "#CFBAE1";

export default class StaticCircle {
  x: number;
  y: number;
  id: number;
  radius: number;
  color: string;
  isMoving: boolean;
  constructor(x: number, y: number, id: number, radius: number) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.radius = radius;
    this.color = INITIAL_COLOR;
    this.isMoving = false;
  }
  update() {
    // Change color and cursor on hover
    if (
      mouse.x > this.x - this.radius &&
      mouse.x < this.x + this.radius &&
      mouse.y > this.y - this.radius &&
      mouse.y < this.y + this.radius
    ) {
      canvas.style.cursor = "move";
    } else if (canvas.style.cursor === "move") {
      canvas.style.cursor = "default";
    }

    // Movement when dragged
    if (
      mouse.x > this.x - this.radius &&
      mouse.x < this.x + this.radius &&
      mouse.y > this.y - this.radius &&
      mouse.y < this.y + this.radius &&
      mouse.clicked === true &&
      !EntityManager[this.id === 0 ? 1 : 0].isMoving
    ) {
      this.x = mouse.x;
      this.y = mouse.y;
      this.isMoving = true;
    } else if (mouse.clicked !== false) {
      this.isMoving = false;
    }
  }
  render() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}
