
var Engine = Matter.Engine,
  Body = Matter.Body,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine, world, ground, player;
var canvas;

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

  for (var i = 0; i < 5; i++) {
    var temp_obstacles;
    for (var j = 0; j < 1; j++) {
      temp_obstacles = [];
      let x_position = random(width);
      let pole_height = random(windowHeight - 200);
      temp_obstacles.push(new Box(x_position, 0, 80, pole_height- 120, { isStatic: true }, '#3d3e'));
      temp_obstacles.push(new Box(x_position, height - 120, 80, pole_height, { isStatic: true }, '#3d3e'));
    }
    obstacles.push(temp_obstacles);
  }


  player = new Circle(50, height - 120, 20, { restitution: 1, friction: 0.5 }, '#ff9f43');
}

function keyPressed() {
  var pos = player.body.position;
  if (keyCode === UP_ARROW) {
    Body.applyForce(player.body, { x: pos.x, y: pos.y }, { x: 0, y: -0.03 });
  } else if (keyCode === DOWN_ARROW) {
    Body.applyForce(player.body, { x: pos.x, y: pos.y }, { x: 0, y: 0.03 });
  } else if (keyCode === RIGHT_ARROW) {
    Body.applyForce(player.body, { x: pos.x, y: pos.y }, { x: 0.02, y: 0 });
  } else if (keyCode === LEFT_ARROW) {
    Body.applyForce(player.body, { x: pos.x, y: pos.y }, { x: -0.02, y: 0 });
  }
}

function windowResized() {
  redraw();
  centerCanvas();
}

function draw() {
  background(19, 15, 64);
  for (var i = 0; i < obstacles.length; i++) {
    for (var j = 0; j < 2; j++) {
      obstacles[i][j].show();
    }
  }
  ground.show();
  player.show();
}
// let poleImg;

// function preload() {
//   poleImg = loadImage('pole.png');
// }