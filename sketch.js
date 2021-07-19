var box
function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,50,50);
  box.shapeColor='pink'
}

function draw() 
{
  background(0,255,255);
  if(keyDown('left')) {
    box.position.x-=5
  }
  if(keyDown('right')) {
    box.position.x+=5
  }
  if(keyDown('up')){
    box.position.y-=5
  }
  if(keyDown('down')){
    box.position.y+=5
  }
  drawSprites()

}




