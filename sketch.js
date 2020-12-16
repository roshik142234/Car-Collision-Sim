var car, wall, road;

var speed, weight;



function setup() {
  createCanvas(1440,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(500, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1380, 200, 60, height/2);
  wall.shapeColor = color(0, 0, 255)
  road = createSprite(720, 200, 1440, 200);
  road.shapeColor = color(0);
  
}

function draw() {
  background(21, 114, 73);  

  car.depth = road.depth+1;
  wall.depth = car.depth;

  if (wall.x-car.x < car.width+wall.width) {
    car.velocityX = 0;
    car.x = wall.x-55.5;
    var deformation = 0.5*weight*speed*speed/22509
    if (deformation>181) {
      car.shapeColor = color(255,0,0);
    }
    if (deformation<180 && deformation>99) {
      car.shapeColor = color(230,230,0);
    }
    if (deformation<100) {
      car.shapeColor= color(0,255,0);
    }

  }

  drawSprites();
}