import { BOX, COLORS } from "../../common/constants/index.js";

export class GameArea {
  constructor() {
    this.canvas = document.getElementById("snake");
    this.context = this.canvas.getContext("2d");
  }

  draw = () => {
    this.context.fillStyle = COLORS.LIGHTGREEN;
    this.context.fillRect(0, 0, 16 * BOX, 16 * BOX);
  };

  getContext = () => {
    return this.context;
  };
}
