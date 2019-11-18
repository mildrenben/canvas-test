const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context: CanvasRenderingContext2D = canvas.getContext("2d");

const STANDARD_VELOCITY: number = 1;
const STANDARD_RADIUS: number = 10;
const MINIMUM_RADIUS: number = 3;
const MAXIMUM_RADIUS: number = 50;
const CANVAS_WIDTH: number = window.innerWidth;
const CANVAS_HEIGHT: number = window.innerHeight;

const COLORS: string[] = [
  "#725752",
  "#878E88",
  "#F0544F",
  "#FDF0D5",
  "#BBE1C3"
];

const mouse = {
  x: undefined,
  y: undefined
};

document.addEventListener("mousemove", ({ x, y }) => {
  mouse.x = x;
  mouse.y = y;
});

class Entity {
  y: number;
  x: number;
  xvelocity: number;
  yvelocity: number;
  color: string;
  id: number;
  radius: number;
  original_radius: number;
  constructor(
    x: number,
    y: number,
    xvelocity: number,
    yvelocity: number,
    color: string,
    radius: number
  ) {
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

    this.xvelocity = xvelocity;
    this.yvelocity = yvelocity;
    this.color = color;
    this.id = state.length;
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

let state: Entity[] = [];

function clear(): void {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function animate(): void {
  requestAnimationFrame(animate);
  clear();
  state.forEach(entity => {
    entity.update();
    entity.render();
  });
}

function init(): void {
  for (let i = 1; i < 800; i++) {
    state.push(
      new Entity(
        Math.random() * CANVAS_WIDTH,
        Math.random() * CANVAS_HEIGHT,
        Math.random() * STANDARD_VELOCITY * (Math.random() > 0.5 ? 1 : -1),
        Math.random() * STANDARD_VELOCITY * (Math.random() > 0.5 ? 1 : -1),
        COLORS[Math.floor(Math.random() * COLORS.length)],
        Math.random() * STANDARD_RADIUS
      )
    );
  }
  animate();
}

init();
