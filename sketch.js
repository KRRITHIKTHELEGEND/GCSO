var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(10,200,50,55);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background("black");
  car.velocityX = speed;
if (wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX = 0;
  deformation = 0.5 * weight * speed * speed / 22500;
  if (deformation < 80) {
    car.shapeColor="#57FF1C"
  }
  if (deformation > 80 && deformation < 180) {
    car.shapeColor="#FFFF00"
  }
  if (deformation > 180) {
    car.shapeColor="#FF0000"
  }
}
  drawSprites();
}