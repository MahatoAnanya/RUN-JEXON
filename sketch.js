//var track
var path

var PLAY=1;
var END=0;
var gameState=1;






function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,600);
  //create sprites here
   //track= creatSprite(200,200,400,400)
   
   path = createSprite(200,200)
   path.addImage(pathImg)
   path.velocityY=4
   path.scale=1.5

   boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",runnerImg);
boy.scale=0.08;
  
}

function draw() {
  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges);
    
    //code to reset the background
    if(path.y > 400 ){
      path.y = height/2;
    }
    drawSprites()

  }




}
