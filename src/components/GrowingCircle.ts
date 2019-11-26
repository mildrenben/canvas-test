import Entity, { IEntity } from "./Entity";
import context from "../utilities/context";
import mouse from "../utilities/mouse";

const MINIMUM_RADIUS: number = 3;
const MAXIMUM_RADIUS: number = 50;
const CANVAS_WIDTH: number = window.innerWidth;
const CANVAS_HEIGHT: number = window.innerHeight;

interface IGrowingCircle extends IEntity {
  color: string;
  radius: number;
}

export default class GrowingCircle extends Entity {
  color: string;
  radius: number;
  original_radius: number;
  constructor(options: IGrowingCircle) {
    super(options);

    let { x, y, radius, color } = options;

    // Radius minimum
    if (radius < MINIMUM_RADIUS) {
      radius = MINIMUM_RADIUS;
    }
    // Correct collisions with edge of canvas
    if (x < radius) {
      this.x = radius;
    } else if (x > CANVAS_WIDTH - radius) {
      this.x = CANVAS_WIDTH - radius;
    } else {
      this.x = x;
    }
    // Correct collisions with edge of canvas
    if (y < radius) {
      this.y = radius;
    } else if (y > CANVAS_WIDTH - radius) {
      this.y = CANVAS_WIDTH - radius;
    } else {
      this.y = y;
    }

    this.color = color;
    this.radius = radius;
    this.original_radius = radius;
  }
  update() {
    // X
    if (this.x > CANVAS_WIDTH - this.radius || this.x < 0 + this.radius) {
      this.xvelocity = this.xvelocity * -1;
    }

    // Y
    if (this.y > CANVAS_HEIGHT - this.radius || this.y < 0 + this.radius) {
      this.yvelocity = this.yvelocity * -1;
    }

    // Grow/shrink
    if (
      mouse.x + 50 >= this.x &&
      mouse.x - 50 <= this.x &&
      mouse.y + 50 >= this.y &&
      mouse.y - 50 <= this.y &&
      !(this.radius >= MAXIMUM_RADIUS)
    ) {
      this.radius = this.radius + 2;
    } else if (this.radius > this.original_radius) {
      this.radius = this.radius - 2;
    }

    // Update velocities
    this.x = this.x + this.xvelocity;
    this.y = this.y + this.yvelocity;
  }
  render() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}
