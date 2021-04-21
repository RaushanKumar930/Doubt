const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground

var particle = []
var plinko = []
var divisions = []
var divisionHeight = 200


function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,590,600,10)
  for(var k = 0; k<=100; k = k + 80){
	divisions.push(new Divisions(k, hieght-divisionHeight/2,10,divisionHeight))
  }
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
  drawSprites();
	divisions[1].display()
  ground.display()

}