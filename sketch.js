var city;
var santa;
var santaImg;
var grinchImg;
var grinch;
var juguetes;
var juguete1;
var juguete2;
var juguete3;
var juguete4;
var juguete5;
var toysgroup;


function preload(){

city = loadImage("assets/city.jpg");
santaImg = loadImage("assets/santa.png");
grinchImg = loadImage("assets/grinch.png");
juguete1 = loadImage("assets/oso.png");
juguete2 = loadImage("assets/caballo.png");
juguete3 = loadImage("assets/coche.png");
juguete4 = loadImage("assets/tren.png");
juguete5 = loadImage("assets/regalo.png");
}


function setup() {

createCanvas(1400,640);

santa = createSprite(200,200,40,40);
santa.addImage("santa",santaImg);
santa.scale = 0.2;

/*grinch = createSprite(700,60,40,40);
grinch.addImage("grinch",grinchImg);
grinch.scale = 0.2;*/

toysgroup = createGroup();
}

function draw() 
{
  background(city);

  keyPressed();

  if(frameCount % 60 === 0 || frameCount % 80 === 0 || frameCount % 100 === 0){

    toysgenerator();

    }
  
  drawSprites();
}

function keyPressed (){

  if (keyDown("left")) {
    santa.x -= 5;
  }

  if (keyDown("right")) {
    santa.x += 5; 
  }

  if (keyDown("up")) {
      santa.y -= 5;
  }

  if (keyDown("down")) {
        santa.y += 5;
  }
}

function toysgenerator(){

  juguetes = createSprite(random(400,1500),90,30,30);
 
  var rand = Math.round(random(1,5));
  switch(rand){
    case 1: juguetes.addImage("juguete1",juguete1);
      break;
    case 2: juguetes.addImage("juguete2",juguete2);
      break;
    case 3: juguetes.addImage("juguete3",juguete3);
      break;
    case 4: juguetes.addImage("juguete4",juguete4);
      break;  
    case 5: juguetes.addImage("juguete5",juguete5);
      break;
    default: break;  
  }

  juguetes.scale = 0.1;
  juguetes.velocityY = 15;
  juguetes.lifetime = 200;
  toysgroup.add(juguetes);
}
