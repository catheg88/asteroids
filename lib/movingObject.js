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
