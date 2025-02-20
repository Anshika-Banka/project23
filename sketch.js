var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	wall1Sprite=createSprite(width/2,height-50,200,20);
	wall1Sprite.shapeColor="red";
	wall2Sprite=createSprite(width/2-100,height-100,20,100);
	wall2Sprite.shapeColor="red";
	wall3Sprite=createSprite(width/2+100,height-100,20,100);
	wall3Sprite.shapeColor="red";
	
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 wall1 = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true} );
	 World.add(world,wall1);
	 
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y  
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
  {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Matter.Body.setStatic(packageBody,false);
  }
}



