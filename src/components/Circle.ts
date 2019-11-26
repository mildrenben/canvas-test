import Entity, { IEntity } from "./Entity";
import context from "../utilities/context";

export interface ICircle extends IEntity {
  radius: number;
  color: string;
}

class Circle extends Entity {
  radius: number;
  color: string;
  constructor(options: ICircle) {
    super(options);
    this.radius = options.radius;
    this.color = options.color;
  }
  render(): void {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

export default Circle;
