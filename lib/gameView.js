var Game = require("./game.js");

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.game.moveObjects.bind(this.game), 20);
  setInterval(function () {this.game.draw(this.ctx);}.bind(this), 20);
};

module.exports = GameView;
