var fixed,moving;

function setup() {
  createCanvas(800,400);
  moving = createSprite(20, 200, 50, 50);
  fixed = createSprite(500, 200, 50, 50);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  moving.velocityX = 5;
}


function draw() {
  background(255,255,255);
  
  //moving.x = mouseX;
  //moving.y = mouseY;
  

  if(moving.x - fixed.x <= moving.width/2+fixed.width/2&&fixed.x - moving.x <= moving.width/2+fixed.width/2
    &&moving.y - fixed.y <= moving.height/2+fixed.height/2&&fixed.y - moving.y <= moving.height/2+fixed.height/2){
    fixed.shapeColor = "blue";
  moving.shapeColor = "blue";
  moving.velocityX = moving.velocityX * (-1);
  
  }
else{
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
}



  drawSprites();
}