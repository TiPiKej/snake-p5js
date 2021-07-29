"use strict";

var pixelSize;
var snake;
var nbrOfField = 30;
var apples = [];

function setup() {
  if (windowHeight > windowWidth) {
    createCanvas(windowWidth, windowWidth);
    pixelSize = windowWidth / nbrOfField;
  } else {
    createCanvas(windowHeight, windowHeight);
    pixelSize = windowHeight / nbrOfField;
  }

  snake = Snake(-1, 0, 3);
  draw();
  frameRate(5);
}

function draw() {
  snake.moveBody(apples);
  if (snake.checkIfLose(nbrOfField)) return frameRate(0);
  apples = apples.filter(function (pos) {
    return !(pos.x == snake.getBody()[0].x && pos.y == snake.getBody()[0].y);
  });
  background(0, 154, 23);
  fill(0);
  snake.getBody().forEach(function (el) {
    rect(el.x * pixelSize, el.y * pixelSize, pixelSize, pixelSize);
  });
  var centerPixel = pixelSize / 2;
  strokeWeight(pixelSize / 3);
  apples.forEach(function (_ref) {
    var x = _ref.x,
        y = _ref.y;
    point(x * pixelSize + centerPixel, y * pixelSize + centerPixel);
  });
  if (frameCount % 20 == 0) apples.push({
    x: parseInt(random(0, nbrOfField)),
    y: parseInt(random(0, nbrOfField))
  });
}

function keyPressed() {
  snake.setDirection(keyCode);
}