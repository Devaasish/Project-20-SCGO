var car, wall;
var speed, weight;
var line1;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80,80,80);

  line1 = createSprite(1600, 200, 60, 10);
  line1.shapeColor = "white";
}

function draw() {
  background(0,0,0);  

  if (wall.x-car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }

    if(deformation > 180){
      car.shapeColor = "red";
    }
  }

  drawSprites();
}