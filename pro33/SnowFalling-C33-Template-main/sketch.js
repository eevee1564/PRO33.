var bg;
var boy;

function preload(){

bg=loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  if(keyDown("space")){
    boy.velocityY=5;
  }

}

function draw() {
  background(bg);  
  drawSprites();
}