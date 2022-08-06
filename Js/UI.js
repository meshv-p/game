export class UI {
  constructor(game) {
    this.game = game;
    this.fonstSize = 30;
    this.fontFamily = "Helvetica";
  }
  draw(ctx) {
    ctx.font = this.fonstSize + "px " + this.fontFamily;
    ctx.textAlign = "left";
    ctx.fillStyle = this.game.fontColor;

    ctx.fillText("Score: " + this.game.score, 20, 50);
  }
}
