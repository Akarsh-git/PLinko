
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Body = Matter.Body;
var ground;
var particles =[]
var plinkos=[]
var divisions=[]


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,790,width,20);
	
	for(var i=0;i<width;i=i+80){
		divisions.push(new Ground(i,height-150,10,300))
	}
	for(var i=75;i<width;i=i+50){
		plinkos.push(new Plinko(i,75,10))
	}
	for(var i=50;i<width;i=i+50){
		plinkos.push(new Plinko(i,175,10))
	}	
	for(var i=75;i<width;i=i+50){
		plinkos.push(new Plinko(i,275,10))
	}
	for(var i=55;i<width;i=i+50){
		plinkos.push(new Plinko(i,375,10))
	}
	
	
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  ground.display();
  
 for(var i=0;i<plinkos.length;i++){
	 plinkos[i].display()
	 
 }
 if (frameCount%60==0){
	 particles.push(new Particle(random(width/2-30,width/2+30),10,10))
 }
 for(var i=0;i<particles.length;i++){
	particles[i].display()
	
}
for(var i=0;i<divisions.length;i++){
	divisions[i].display()
	
}
}

