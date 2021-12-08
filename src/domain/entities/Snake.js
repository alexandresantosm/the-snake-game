import { BOX, COLORS, DIRECTIONS } from "../../common/constants/index.js";
import { show } from "../../common/utils/index.js";

export class Snake {
  snake = [];
  constructor(contex) {
    this.context = contex;
    this.snake[0] = {
      x: 8 * BOX,
      y: 8 * BOX,
    };
    this.direction = DIRECTIONS.RIGHT;
  }

  draw = () => {
    for (let i = 0; i < this.snake.length; i++) {
      this.context.fillStyle = COLORS.GREEN;
      this.context.fillRect(this.snake[i].x, this.snake[i].y, BOX, BOX);
    }
  };

  areaLimited = () => {
    if (this.getHead().x > 15 * BOX && this.direction === DIRECTIONS.RIGHT)
      this.getHead().x = 0;
    if (this.getHead().x < 0 && this.direction === DIRECTIONS.LEFT)
      this.getHead().x = 16 * BOX;
    if (this.getHead().y > 15 * BOX && this.direction === DIRECTIONS.DOWN)
      this.getHead().y = 0;
    if (this.getHead().y < 0 && this.direction === DIRECTIONS.UP)
      this.getHead().y = 16 * BOX;
  };

  move = (event) => {
    if (event.keyCode === 37 && this.direction !== DIRECTIONS.RIGHT)
      this.direction = DIRECTIONS.LEFT;
    if (event.keyCode === 38 && this.direction !== DIRECTIONS.DOWN)
      this.direction = DIRECTIONS.UP;
    if (event.keyCode === 39 && this.direction !== DIRECTIONS.LEFT)
      this.direction = DIRECTIONS.RIGHT;
    if (event.keyCode === 40 && this.direction !== DIRECTIONS.UP)
      this.direction = DIRECTIONS.DOWN;
  };

  getHead = () => {
    return this.snake[0];
  };

  getDirection = () => {
    return this.direction;
  };

  remove = () => {
    this.snake.pop();
  };

  add = (head) => {
    this.snake.unshift(head);
  };

  die = (game) => {
    for (let i = 1; i < this.snake.length; i++) {
      if (
        this.getHead().x === this.snake[i].x &&
        this.getHead().y === this.snake[i].y
      ) {
        clearInterval(game);
        show("Game Over :(");
      }
    }
  };
}
