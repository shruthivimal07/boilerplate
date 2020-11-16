var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 100, 50);
  fixedRect = createSprite(600,200,100,50);

}

function draw() {
  background("cyan"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 

  if (movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
    {
   movingRect.shapeColor = "darkblue";
   fixedRect.shapeColor = "darkblue";
  }
  else{
    movingRect.shapeColor = "gray";
    fixedRect.shapeColor = "gray";
  }
  drawSprites();
}