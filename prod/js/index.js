let pixelSize;
let snake;
const nbrOfField = 30;
let apples = [];

function setup() {
  if (windowHeight > windowWidth) {
    createCanvas(windowWidth, windowWidth);
    pixelSize = windowWidth / nbrOfField;
  } else {
    createCanvas(windowHeight, windowHeight);
    pixelSize = windowHeight / nbrOfField;
  }

  snake = Snake(-1, 0, 3);

  draw()
  frameRate(5)
}

function draw() {
  snake.moveBody(apples);
  
  if (snake.checkIfLose(nbrOfField)) return frameRate(0)

  apples = apples.filter(pos => !(pos.x == snake.getBody()[0].x && pos.y == snake.getBody()[0].y));

  background(0,154,23)

  fill(0);
  snake.getBody().forEach(el => {
    rect(el.x * pixelSize, el.y * pixelSize, pixelSize, pixelSize)
  })

  const centerPixel = pixelSize / 2;
  strokeWeight(pixelSize / 3);
  apples.forEach(({x, y}) => {
    point(x * pixelSize + centerPixel, y * pixelSize + centerPixel);
  })

  if (frameCount % 20 == 0) apples.push({
    x: parseInt(random(0, nbrOfField)),
    y: parseInt(random(0, nbrOfField))
  });
}

function keyPressed() {
  snake.setDirection(keyCode);
}