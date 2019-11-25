import context from "../utilities/context";
import { EntityManager } from "../pages/staticCircleCollision";
import { INITIAL_COLOR } from "./StaticCircle";

export default class Line {
  update() {
    const [circle1, circle2] = EntityManager;

    const deltaX = circle1.x - circle2.x;
    const deltaY = circle1.y - circle2.y;

    const deltaXSquared = deltaX * deltaX;
    const deltaYSquared = deltaY * deltaY;

    const lineLength = Math.sqrt(deltaXSquared + deltaYSquared);

    if (lineLength < circle1.radius + circle2.radius) {
      EntityManager[0].color = "red";
      EntityManager[1].color = "red";
    } else {
      EntityManager[0].color = INITIAL_COLOR;
      EntityManager[1].color = INITIAL_COLOR;
    }
  }
  render() {
    const [circle1, circle2] = EntityManager;

    context.beginPath();
    context.moveTo(circle1.x, circle1.y);
    context.lineTo(circle2.x, circle2.y);
    context.stroke();
  }
}
