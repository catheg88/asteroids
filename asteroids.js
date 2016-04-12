var Game = require("./lib/game.js");
var GameView = require("./lib/gameView.js");

var canvasEl = document.getElementById("game-canvas");
var ctx = canvasEl.getContext("2d");

var newGame = new Game();
var newGameView = new GameView(newGame, ctx);

newGameView.start();
