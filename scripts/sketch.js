
var Engine = Matter.Engine,
  Body = Matter.Body,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine, world, ground;
var objects = [];

var canvas;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  // objects = new Circle(400, 200, 20, { restitution: 1 })
  ground = new Box(width / 2, height, width, 150, { isStatic: true });
}

function keyPressed() {
  var pos = objects[0].body.position;
  if (keyCode === UP_ARROW) {
    Body.applyForce(objects[0], { x: pos.x, y: pos.y }, { x: 0, y: -0.05 });
  } else if (keyCode === DOWN_ARROW) {
    Body.applyForce(objects[0], { x: pos.x, y: pos.y }, { x: 0, y: 0.05 });
  } else if (keyCode === RIGHT_ARROW) {
    Body.applyForce(objects[0], { x: pos.x, y: pos.y }, { x: 0.05, y: 0 });
  } else if (keyCode === LEFT_ARROW) {
    Body.applyForce(objects[0], { x: pos.x, y: pos.y }, { x: -0.05, y: 0 });
  }
}

function mousePressed() {
  if (random(1) < 0.5)
    objects.push(new Circle(mouseX, mouseY, 10, { restitution: 1 }))
  else
    objects.push(new Box(mouseX, mouseY, 20, 20, { restitution: true }))
}

function windowResized() {
  redraw();
  centerCanvas();
}

function draw() {
  background(19,15,64);
  for (var i = 0; i < objects.length; i++)
    objects[i].show();
}