const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, ground, world;

function preload() {
	
}

function setup() {
	createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

	//create the sprites
	paper = new Paper(200, 450, 40);
	dustbin = new dustbin(200, 450, 40);

	//create the ground
	ground = createSprite(390, 20, 600, 400)

	//Create the Bodies Here
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	dustbin.display();
	paper.display();
	ground.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}


