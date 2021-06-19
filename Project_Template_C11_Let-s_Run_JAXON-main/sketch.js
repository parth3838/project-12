//creating variable
var jake , runJake;
var path , pathImage;
var leftBoundary, rightBoundary;
var coin , coinImage;

function preload(){

  //pre-load images
  runJake = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","jake5.png");
  pathImage = loadImage("path.png");
  coinImage = loadImage("coin.png");

}

function setup(){
  createCanvas(400,700);



 //creating path
 path = createSprite(200,350,500,700);
 path.addImage("path",pathImage);
 path.scale = 1.2;
 path.y = path.height/2;
 path.velocityY = 5;


//creating jake
 jake = createSprite(205,600,20,50);
 jake.addAnimation("run", runJake);
 jake.scale = 1;

 //creating invisible boundary
 leftBoundary = createSprite(0,350,100,700);
 rightBoundary = createSprite(390,350,80,700);
 leftBoundary.visible = false;
 rightBoundary.visible = false;

  //generate random numbers
  var rand =  Math.round(random(100,100));
  console.log(rand);
 

}

function draw() {
  background("black");

  jake.x = World.mouseX;

  jake.collide(leftBoundary);
  jake.collide(rightBoundary);

  if(path.y>400) {
    path.y=height/2
  }

  spawnCoin();
  

  drawSprites();
}

//function to spawn the coin
function spawnCoin(){
 console.log(frameCount);

  if (frameCount % 80===0){
    // write your code here 
 coin = createSprite(205,300,20,50);
 coin.scale = 0.5;
 coin.velocityY=3;
 coin.x= Math.round(random(100,320));
 coin.addImage("coin",coinImage);
 coin.depth = jake.depth;
 jake.depth = jake.depth+1;
  }

 
}


