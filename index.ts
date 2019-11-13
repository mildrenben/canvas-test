const canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement;
canvas.style.border = "solid 1px";
const context: CanvasRenderingContext2D = canvas.getContext("2d");

const STANDARD_VELOCITY = 2;

class Entity {
  y: number;
  x: number;
  velocity: number;
  color: string;
  constructor(x: number, y: number, velocity: number, color: string) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.color = color;
  }
  update() {
    if (this.x > 400) {
      this.velocity = STANDARD_VELOCITY * -1;
    }
    if (this.x < 0) {
      this.velocity = STANDARD_VELOCITY;
    }
    this.x = this.x + this.velocity;
  }
  render() {
    context.beginPath();
    context.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
  }
}

let state: Entity[] = [];

function clear(): void {
  context.clearRect(0, 0, 400, 400);
}

const pink: string[] = ["#F06292", "#F48FB1", "#F8BBD0", "#FCE4EC"];

function animate(): void {
  requestAnimationFrame(animate);
  clear();
  state.forEach(entity => {
    entity.update();
    entity.render();
  });
}

function init(): void {
  pink.reverse().forEach((color, index) => {
    state.push(new Entity(25 + index * 8, 25, STANDARD_VELOCITY, pink[index]));
  });
  animate();
}

init();
