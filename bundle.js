/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);
	var GameView = __webpack_require__(5);

	var canvasEl = document.getElementById("game-canvas");
	var ctx = canvasEl.getContext("2d");

	var newGame = new Game();
	var newGameView = new GameView(newGame, ctx);

	newGameView.start();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(2);

	function Game() {
	  this.DIM_X = 500;
	  this.DIM_Y = 500;
	  this.NUM_ASTEROIDS = 5;
	  this.asteroids = [];
	  this.addAsteroids();
	}

	Game.prototype.addAsteroids = function () {
	  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
	    this.asteroids.push(
	      new Asteroid(
	        [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]
	      )
	    );
	  }
	};

	Game.prototype.draw = function (ctx) {
	  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
	  this.asteroids.forEach(function(asteroid) {
	    asteroid.draw(ctx);
	  });
	};

	Game.prototype.moveObjects = function () {
	  this.asteroids.forEach(function(asteroid) {
	    asteroid.move();
	  });
	};

	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var MovingObject = __webpack_require__(3);
	var Util = __webpack_require__(4);

	function Asteroid(aPos, gameInput) {
	  MovingObject.call(this, {
	    pos: aPos,
	    vel: [Math.random() * 10, Math.random() * 10],
	    radius: 10,
	    color: "#614126",
	    game: gameInput
	  });
	}

	Util.inherits(Asteroid, MovingObject);

	module.exports = Asteroid;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function MovingObject(attrObject) {
	  this.pos = attrObject.pos;
	  this.vel = attrObject.vel;
	  this.radius = attrObject.radius;
	  this.color = attrObject.color;
	}

	MovingObject.prototype.draw = function (ctx) {
	  ctx.fillStyle = this.color;
	  ctx.beginPath();

	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI
	  );

	  ctx.fill();
	};

	MovingObject.prototype.move = function () {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	};

	module.exports = MovingObject;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Util = {
	  inherits: function(ChildClass, ParentClass) {
	    function Surrogate() {}
	    Surrogate.prototype = ParentClass.prototype;
	    ChildClass.prototype = new Surrogate();
	    ChildClass.prototype.constructor = ChildClass;
	  }
	};

	module.exports = Util;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);

	function GameView(game, ctx) {
	  this.game = game;
	  this.ctx = ctx;
	}

	GameView.prototype.start = function() {
	  setInterval(this.game.moveObjects.bind(this.game), 20);
	  setInterval(function () {this.game.draw(this.ctx);}.bind(this), 20);
	};

	module.exports = GameView;


/***/ }
/******/ ]);