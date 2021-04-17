
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var fish1=[]
var score
function preload(){
    bg1=loadImage("images/bg2.jpg")
    oFishImg=loadImage("images/fish1.png")
    octopusImg=loadImage("images/octopus.png")
}

function setup(){
    canvas = createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;
    police = new PoliceSubmarine(200,750,200,200)
    ground  = new Ground(800,790,1600,10)
    target = new Target(300,100,200,200)
    ground1= new Ground(400,200,300,20)
    score=0

    
   
    

    

    
}

function draw(){
    background(bg1);
    Engine.update(engine);
    police.display()
    fill("lightblue")
    ground.display()
  target.display()
  ground1.display()
  orangeFish()
  octopus()
 // fish.display()
  text("SCORE"+score,1200,100)
  if(frameCount%50===0){
  fish= new Fish(1200,300,50,50)
  fish1.push(fish)    
  }
  for(var i=0;i<fish1.length;i++){
  fish1[i].display() 

  }
 score=frameCount  
var collision=Matter.SAT.collides(police.body,target.body)
if(collision.collided){
text("GAME OVER",1200,400)
score=0  

}   
drawSprites()  
   }
function orangeFish(){
if(frameCount%300===0){
var oFish= createSprite(1500,100,20,20)   
oFish.velocityX=-2
oFish.addImage("f",oFishImg) 
oFish.scale=0.5
} 

}
function octopus(){
if(frameCount%200===0){
var rand=Math.round(random (50,1200))
var octopus= createSprite(rand,10,20,20) 
octopus.velocityY=2
octopus.addImage("o",octopusImg)   
octopus.scale=0.25

}    
}   

