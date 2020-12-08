
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeimg,treesprite;
var rock;
var boyimg;
var gameState;
var mango1,mango2,mango3,mango4;
var i = 5;
function preload()
{
	boyimg = loadImage("boy.png");
treeimg = loadImage("tree.png")	
}

function setup() {
	createCanvas(800,600);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,590,1200,20);
	rock = new stone(120,500,10);
	treesprite = createSprite(550,350,50,50);
	treesprite.addImage(treeimg);
  treesprite.scale = 0.4;
  mango1 = new Mango(500,200,10);
  mango2 = new Mango(545,295,10);
  mango3 = new Mango(600,300,10);
  mango4 = new Mango(700,275,10);
sling = new Sling(rock.body,{x:138,y:480})
 
  
}


function draw() {
  Engine.update(engine);
  background(250);
  drawSprites();
  rectMode(CENTER);
  imageMode(CENTER);
  image(boyimg,200,525,200,200);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
 // sling.display();
  ground.display();
  rock.display();
  
}
function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    sling.release();
}
function keyPressed(){
    if(keyCode === 32)
    {  
        Matter.Body.setPosition(rock.body,{x:200, y:50}); 
        sling.attach(rock.body);

 }
}