var MovingObject = require('./MovingObject.js');
var Util = require('./util.js');

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
