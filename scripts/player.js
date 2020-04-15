class Player {

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
    fill(this.color);
    noStroke();
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }

}