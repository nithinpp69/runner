
var Engine = Matter.Engine,
  Body = Matter.Body,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine, world, ground, player;
var canvas;
var score = 0;

var obstacles = [];

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
  ground = new Box(width / 2, height, width, 120, { isStatic: true, friction: 0.8 }, '#3d3e3e');
  player = new Player(500, height - 120, 30, 80, { restitution: 1, friction: 0.5 }, '#ff9f43');

  setInterval(() => {
    generatePoles();
  }, 2000)
}

function keyPressed() {
  var pos = player.body.position;
  if (keyCode === UP_ARROW) {
    Body.applyForce(player.body, { x: pos.x, y: pos.y }, { x: 0.02, y: -0.08 });
  } else if (keyCode === DOWN_ARROW) {
    Body.applyForce(player.body, { x: pos.x, y: pos.y }, { x: 0, y: 0.03 });
  }
}

function generatePoles() {
  let pole_height = floor(random(80, 120));
  let pole_width = floor(random(60, 100));
  let x_position = width + 80;
  obstacles.push(new Box(x_position, height - pole_height, pole_width, pole_height, { isStatic: true, friction: 0.8 }, '#3d3e'));
}

function windowResized() {
  redraw();
  centerCanvas();
}

function draw() {
  background(19, 15, 64);
  fill(255);
  text(floor(score), width - 200, 50);
  if (obstacles.length > 0)
    for (var i = 0; i < obstacles.length; i++) {
      let obstacle = obstacles[i].body;
      obstacles[i].show();
      score += 0.03;
      Body.setPosition(obstacle, { x: obstacle.position.x - 5, y: obstacle.position.y });
    }
  ground.show();
  player.show();
}