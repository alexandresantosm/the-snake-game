import { BOX, DIRECTIONS } from "./common/constants/index.js";
import { GameArea, Food, Snake } from "./domain/entities/index.js";

const gameArea = new GameArea();
let context = gameArea.getContext();
const snake = new Snake(context);
const food = new Food(context);

//quando um evento acontece, detecta e chama uma função
document.addEventListener("keydown", update);

function update(event) {
  snake.move(event);
}

function init() {
  snake.areaLimited();
  gameArea.draw();
  snake.draw();
  food.draw();

  snake.die(game);

  let snakeX = snake.getHead().x;
  let snakeY = snake.getHead().y;

  if (snake.getDirection() === DIRECTIONS.RIGHT) snakeX += BOX;
  if (snake.getDirection() === DIRECTIONS.LEFT) snakeX -= BOX;
  if (snake.getDirection() === DIRECTIONS.UP) snakeY -= BOX;
  if (snake.getDirection() === DIRECTIONS.DOWN) snakeY += BOX;

  const { x, y } = food.getCoordenate();
  if (snakeX !== x || snakeY !== y) {
    snake.remove(); //pop tira o último elemento da lista
  } else {
    food.createNewFood();
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.add(newHead); //método unshift adiciona como primeiro quadradinho da cobrinha
}

let game = setInterval(init, 100);
