var Plr;
var Zombie;
var rightEdge, leftEdge;
var zombieGrp;

function setup() {
  createCanvas(800,400);

  Plr = createSprite(400, 300, 40, 40);

  rightEdge = createSprite(0, 200, 20, 400);
  leftEdge = createSprite(800, 200, 20, 400);

  zombieGrp = new Group();
}

function draw() {
  background(255, 223, 0);  

  zombieGrp.collide(rightEdge);

  drawSprites();
  spawnZombie();
}

function spawnZombie(){
  if(frameCount%60 === 50){
    Zombie = createSprite(Math.round(random(0, 400)), Math.round(random(-20, -100)), 20, 20);
    Zombie.velocityY = 2;
    Zombie.velocityX = Math.round(random(-2, 2));

    zombieGrp.add(Zombie);
  }
}