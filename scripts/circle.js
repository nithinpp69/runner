class Circle {

  constructor(x, y, r, options = {}, color = '#fff') {
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.color = color;
    World.add(world, this.body);
  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    fill(this.color);
    noStroke();
    push();
    translate(pos.x, pos.y);
    rotate(radians(angle));
    rectMode(CENTER);
    circle(0, 0, this.r * 2);
    pop();
  }

}