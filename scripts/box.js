class Box {

  constructor(x, y, w, h, options = {}, color = '#fff') {
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);;
  }

  removeFromWorld() {
    World.remove(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    fill(this.color);
    noStroke();
    push();
    translate(pos.x, pos.y);
    rotate(radians(angle));
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

}