export interface IEntity {
  x: number;
  y: number;
  xvelocity: number;
  yvelocity: number;
  id: number;
}

export default class Entity {
  y: number;
  x: number;
  xvelocity: number;
  yvelocity: number;
  id: number;
  constructor(options: IEntity) {
    const { x, y, xvelocity, yvelocity, id } = options;
    this.x = x;
    this.y = y;
    this.xvelocity = xvelocity;
    this.yvelocity = yvelocity;
    this.id = id;
  }
}
