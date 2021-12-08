import { generate } from "../../common/utils/index.js";
import { BOX, COLORS } from "../../common/constants/index.js";

export class Food {
  food = null;
  constructor(contex) {
    this.context = contex;
    this.food = {
      x: generate() * BOX,
      y: generate() * BOX,
    };
  }

  draw = () => {
    this.context.fillStyle = COLORS.RED;
    this.context.fillRect(this.food.x, this.food.y, BOX, BOX);
  };

  createNewFood = () => {
    this.food = {
      x: generate() * BOX,
      y: generate() * BOX,
    };
  };

  getCoordenate = () => {
    const { x, y } = this.food;
    return {
      x,
      y,
    };
  };
}
