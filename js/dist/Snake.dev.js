"use strict";

var Snake = function Snake(startX, startY, direction) {
  var snakeLength = 1;
  var body = [];

  var constructor = function constructor(startX, startY, direction) {
    body.push({
      x: startX,
      y: startY
    });
  };

  var checkIfHitOnHimself = function checkIfHitOnHimself(x, y) {
    return body.slice(1).filter(function (pos) {
      return pos.x == x && pos.y == y;
    }).length > 0;
  };

  var checkIfHitOnBorder = function checkIfHitOnBorder(x, y, fieldCount) {
    return Math.min(x, y) < 0 || Math.max(x, y) >= fieldCount;
  };

  var checkIfLose = function checkIfLose(fieldCount) {
    var _body$ = body[0],
        x = _body$.x,
        y = _body$.y;
    return checkIfHitOnBorder(x, y, fieldCount) || checkIfHitOnHimself(x, y);
  };

  var addBody = function addBody() {
    return snakeLength++;
  };

  var moveBody = function moveBody(apples) {
    var nextPosition = {
      x: body[0].x,
      y: body[0].y
    };

    switch (direction) {
      case 1:
        // left
        nextPosition.x -= 1;
        break;

      case 2:
        // top
        nextPosition.y -= 1;
        break;

      case 3:
        // right
        nextPosition.x += 1;
        break;

      case 4:
        // down
        nextPosition.y += 1;
        break;
    }

    if (apples.filter(function (pos) {
      return pos.x == nextPosition.x && pos.y == nextPosition.y;
    }).length > 0) addBody();
    body.unshift(nextPosition);
    if (body.length > snakeLength) body.pop();
  };

  var setDirection = function setDirection(dir) {
    // direction controlled by arrows
    var tempDirection = dir - 36; // direction controlled by wsad

    if (dir == 65) tempDirection = 1;else if (dir == 87) tempDirection = 2;else if (dir == 68) tempDirection = 3;else if (dir == 83) tempDirection = 4; // dont move backward

    if (tempDirection == direction - 2 || tempDirection == direction + 2) return; // change direction if is correct

    if (4 >= tempDirection && tempDirection >= 1) direction = tempDirection;
  };

  var getBody = function getBody() {
    return JSON.parse(JSON.stringify(body));
  };

  constructor(startX, startY, direction);
  return {
    addBody: addBody,
    getBody: getBody,
    moveBody: moveBody,
    setDirection: setDirection,
    checkIfLose: checkIfLose
  };
};