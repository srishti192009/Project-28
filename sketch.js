const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var launcher;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,600,10);

	ground=new Ground(400,680,800,20);

	leftWall=new Dustbin(550,620,20,100);
	rightWall=new Dustbin(670,620,20,100);
    bottomWall=new Dustbin(610,660,100,20);

	launcher=new Launcher(this.paper,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftWall.display();
  rightWall.display();
  bottomWall.display();

  launcher.display();
 
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	launcher.fly();
  }
  function keyPressed(){
	if(keyCode === 32){
	launcher.attach(paper.body);
	}
  }
