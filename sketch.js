const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1=new Box(850,380,60,60);
    box2=new Box(950,380,60,60);

pig1= new Pig(900,380);

log1=new Log(900,320,250,PI);

box3=new Box(850,290,60,60);
box4=new Box(950,290,60,60);

pig2=new Pig(900,290);

log2=new Log(900,230,250,PI);

box5=new Box(900,200,60,60);

log3=new Log(950,180,120,PI/7);
log4=new Log(850,180,120,-PI/7);

bird=new Bird(200,300);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display()
box5.display();
log3.display();
log4.display();
bird.display();
}