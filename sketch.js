const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1350, 700);

	engine = Engine.create();
  world = engine.world;

	stone=new Stone(150,520,50);
	boy=new Boy(300,588,30,30);
	tree=new Tree(1100,460,30,30);
	ground=new Ground(0,670,2700,10);
	mango1=new Mango(1050,410,50,50);
	mango2=new Mango(950,390,50,50);
	mango3=new Mango(1200,370,50,50);
	mango4=new Mango(1100,320,50,50);
  mango5=new Mango(1280,380,50,50);
  launcher = new Launcher(stone.body,{x:200, y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}


function mouseDragged(){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  launcher.fly();
}


function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:110,y:520})
	  launcher.attach(stone.body);
	}
}

function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     if(distance<=mango.r+stone.r){
       Matter.Body.setStatic(mango.body,false);
     }

}

