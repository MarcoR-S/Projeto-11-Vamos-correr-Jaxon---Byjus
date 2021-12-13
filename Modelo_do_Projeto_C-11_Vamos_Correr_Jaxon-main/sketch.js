var corredor, rua;
var corredorImg, ruaImg;
var floor1, floor2;

function preload(){
  //imagens pré-carregadas

  corredorImg =  loadAnimation("Runner-1.png", "Runner-2.png", "Runner-1.png", "Runner-2.png");
  ruaImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //crie sprite aqui

  rua = createSprite(200,200,20,20);
  rua.addImage(ruaImg);
  rua.velocityY = 2;
  rua.scale = 0.8;


  corredor = createSprite(180,300,30,30);
  corredor.addAnimation("corredorMovendo", corredorImg);


  floor1 = createSprite(5,200,10,400);
  floor1.visible = false;
  floor2 = createSprite(395,200,10,400);
  floor2.visible = false;

}

function draw() {
  background("black");

corredor.x = World.mouseX;
corredor.collide(floor1);
corredor.collide(floor2);

  if (rua.y >= 400){
    rua.y = rua.height/4;

  
  }
drawSprites();
}
