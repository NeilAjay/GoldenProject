var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fighterPlane, astroid, astroid2, background;
var laser = [];
var backgroundImage, fighter, astroidImage, astroid2Image, laserImage;
var obstaclesGroup;
var k = 0;

var score = 0;

var gameOver, restart, restartImage;

localStorage["HighestScore"] = 0;

function preload(){
backgroundImage = loadImage("SpaceBackground.jpg");

fighter = loadImage("FighterPlane.png")
astroidImage = loadImage("Astroid.png")
astroid2Image = loadImage("astroid2.png")

laserImage = loadImage("RedLaser.png")
}

function setup() {
  createCanvas(800,700);

  fighterPlane = createSprite(400, 400, 50, 50);
  fighterPlane.addImage(fighter);
  fighterPlane.scale = 0.3

  astroid = createSprite(600, 90, 50, 50);
  astroid.addImage(astroidImage);
  astroid.scale = 0.3

  astroid2 = createSprite(200, 30, 50 ,50);
  astroid2.addImage(astroid2Image);
  astroid2.scale = 0.2

  for (var i = 0; i < 200; i++){
    laser[i]= createSprite(400, 400, 10, 80)
    laser[i].visible = false;
    laser[i].addImage(laserImage);
    laser[i].scale = 0.1
  }

  obstaclesGroup = new Group();

  score = 0;
}

function draw() {
  background(backgroundImage);  

  text("Score: "+ score, 400,30);

  if(gameState===PLAY){
    

    if(keyDown(LEFT_ARROW)){
      fighterPlane.x = fighterPlane.x-10
    }

    if(keyDown(RIGHT_ARROW)){
      fighterPlane.x = fighterPlane.x+10
    }

    spawnAstroid();

    if(obstaclesGroup.isTouching(fighterPlane)){
      gameState = END;
  }

  if(keyDown("space")){
    laser[k].visible = true;
    laser[k].x = fighterPlane.x
    laser[k].velocityY = -10
  }
  }
  else if(gameState === END){
    gameOver.visible = true;
    restart.visible = true;

    obstaclesGroup.setVelocityXEach(0);

    fighterPlane.changeAnimation(fighter);

    obstaclesGroup.setLifetimeEach(-1);

    if(mousePressedOver(restart)) {
      reset();
    }
  }

  drawSprites();
} 

function spawnAstroid(){

}