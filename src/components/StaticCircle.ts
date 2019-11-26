import Circle, { ICircle } from "./Circle";
import canvas from "../utilities/canvas";
import mouse from "../utilities/mouse";
import { EntityManager } from "../pages/staticCircleCollision";

export default class StaticCircle extends Circle {
  isMoving: boolean;
  constructor(options: ICircle) {
    super(options);
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
    super.render();
  }
}
