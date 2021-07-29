const Snake = (startX, startY, direction) => {
  let snakeLength = 1;
  let body = [];

  const constructor = (startX, startY, direction) => {
    body.push({
      x: startX,
      y: startY
    })
  }

  const checkIfHitOnHimself = (x, y) => body.slice(1,).filter(pos => pos.x == x && pos.y == y).length > 0

  const checkIfHitOnBorder = (x, y, fieldCount) => Math.min(x, y) < 0 || Math.max(x, y) >= fieldCount;

  const checkIfLose = fieldCount => {
    const {x, y} = body[0];

    return checkIfHitOnBorder(x, y, fieldCount) || checkIfHitOnHimself(x, y);
  }

  const addBody = () => snakeLength++;

  const moveBody = (apples) => {
    let nextPosition = {
      x: body[0].x,
      y: body[0].y
    }

    switch (direction) {
      case 1: // left
        nextPosition.x -= 1;
        break;
      case 2: // top
        nextPosition.y -= 1;
        break;
      case 3: // right
        nextPosition.x += 1;
        break;
      case 4: // down
        nextPosition.y += 1;
        break;
    }

    if (apples.filter(pos => pos.x == nextPosition.x && pos.y == nextPosition.y).length > 0) addBody();

    body.unshift(nextPosition);
    if (body.length > snakeLength) body.pop();
  }

  const setDirection = dir => {
    // direction controlled by arrows
    let tempDirection = dir - 36;

    // direction controlled by wsad
    if (dir == 65) tempDirection = 1;
    else if (dir == 87) tempDirection = 2;
    else if (dir == 68) tempDirection = 3;
    else if (dir == 83) tempDirection = 4;

    // dont move backward
    if (tempDirection == direction - 2 || tempDirection == direction + 2) return;

    // change direction if is correct
    if (4 >= tempDirection && tempDirection >= 1) direction = tempDirection;
  }

  const getBody = () => JSON.parse(JSON.stringify(body));

  constructor(startX, startY, direction);

  return {
    addBody,
    getBody,
    moveBody,
    setDirection,
    checkIfLose
  }
}