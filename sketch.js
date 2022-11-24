var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orange,red,green;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  greenImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  if (frameCount % 80 == 0) {
    //ab significa random
      var ab = Math.round(random(1,4))

      switch(ab) {
        case 1:
          createApples();
          break;
       case 2:
          createOrangeLeaves();
         break;
      case 3:
          createGreenLeaves();
         break;
      case 4:
          createRedLeaves();
          break;
      }
  }
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}
function createOrangeLeaves() {
  orange = createSprite(random(50,350),40,10,10)
  orange.addImage(orangeImg);
  orange.scale = 0.07;
  orange.velocityY = 3;
  orange.lifetime = 150;
}
function createGreenLeaves() {
  green = createSprite(random(50,350),40,10,10)
  green.addImage(greenImg);
  green.scale = 0.07;
  green.velocityY = 3;
  green.lifetime = 150;
}
function createRedLeaves() {
  red = createSprite(random(50,350),40,10,10)
  red.addImage(redImg);
  red.scale = 0.07;
  red.velocityY = 3;
  red.lifetime = 150;
}
