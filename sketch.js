
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function setup()
{
  createCanvas(400,400);
  //create engine
  engine= Engine.create();


  //create a world
world=engine.world;

//create the ball bodies

var ball_options={

  isStatic:false

}
ball=Bodies.circle(100,10,20, ball_options);
//now add the ball body inside the world

World.add(world,ball)

}

function draw() 
{
  background(51);
  Engine.update(engine);

  fill ("yellow")
ellipse(ball.position.x,ball.position.y,20,20)

 
}

