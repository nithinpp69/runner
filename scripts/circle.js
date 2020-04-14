function Circle(x, y, r, options) {
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);;


  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(radians(angle));
    rectMode(CENTER);
    ellipse(0, 0, this.r * 2);
    pop();
  }

}