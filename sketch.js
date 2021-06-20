var backgroundImg;

var iss, spaceCraft;

var hasDocked=false;

var officialCraft,rightMovingCraft,leftMovingCraft,downMovingCraft;
var issImg;

function preload(){
  backgroundImg=loadImage("spacebg.jpg");

 
  rightMovingCraft=loadImage("spacecraft4.png");
  downMovingCraft=loadImage("spacecraft1.png");
  leftMovingCraft=loadImage("spacecraft3.png");
  officialCraft=loadImage("spacecraft2.png");

  issImg=loadImage("iss.png");



}
function setup() {
  createCanvas(800,400);

  iss=createSprite(width/2,height/2,50,50);
  iss.addImage(issImg);
  iss.setCollider('rectangle',15,-60,475,350);
 
  spaceCraft=createSprite(500,325,20,20);
  spaceCraft.addImage(officialCraft);
  spaceCraft.scale=0.09;
  

  if(!hasDocked){
    spaceCraft.x=Math.round(random(50,750));
  }

}

function draw() {
  background(backgroundImg);  

  if(!hasDocked){
    if(keyDown(UP_ARROW)){

      spaceCraft.y=spaceCraft.y-1
      spaceCraft.addImage(officialCraft);
      spaceCraft.scale=0.09;


    }
    else if(keyDown(DOWN_ARROW)){

      spaceCraft.y=spaceCraft.y+1
      spaceCraft.addImage(downMovingCraft);
      spaceCraft.scale=0.09;

    }
    else if(keyDown(LEFT_ARROW)){

      spaceCraft.x=spaceCraft.x-1
      spaceCraft.addImage(rightMovingCraft);
      spaceCraft.scale=0.09;


    }
    else if(keyDown(RIGHT_ARROW)){

      spaceCraft.x=spaceCraft.x+1
      spaceCraft.addImage(leftMovingCraft);
      spaceCraft.scale=0.09;


    }

  }
  if(spaceCraft.x===330&&spaceCraft.y===264){

    spaceCraft.addImage(officialCraft);

    fill("turquoise");
    textSize(25);
    text("The Space Craft Has Successfully Docked !!",200,350);

    hasDocked=true;


  }
  console.log('y position of space craft:'+spaceCraft.y+" and x position of space craft: "+spaceCraft.x);
 
  drawSprites();
}