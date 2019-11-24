export default class Entity {
  y: number;
  x: number;
  xvelocity: number;
  yvelocity: number;
  id: number;
  constructor(
    x: number,
    y: number,
    xvelocity: number,
    yvelocity: number,
    id: number
  ) {
    this.x = x;
    this.y = y;
    this.xvelocity = xvelocity;
    this.yvelocity = yvelocity;
    this.id = id;
  }
}
