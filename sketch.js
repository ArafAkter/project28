const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
roof = new Ground(330,100,250,50)
//roof = createSprite(330,100,250,50)
    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);


    bird= new Bird(250,200);
    //log6 = new Log(230,180,80, PI/2);
    Slingshot1 = new SlingShot(bird.body,{x:250, y:100});

    bird2= new Bird(290,200)
    Slingshot2 = new SlingShot(bird2.body,{x:290, y:100});

    bird3= new Bird(330,200)
    Slingshot3 = new SlingShot(bird3.body,{x:330, y:100});

    bird4= new Bird(370,200)
    Slingshot4 = new SlingShot(bird4.body,{x:370, y:100});

    bird5= new Bird(410,200)
    Slingshot5 = new SlingShot(bird5.body,{x:410, y:100});

}

function draw(){
    background("darkturquoise");
    Engine.update(engine);
    strokeWeight(4);
    roof.display();
   

    bird.display();
    //platform.display();
    //log6.display();
    Slingshot1.display(); 
    bird2.display();
    Slingshot2.display();
    bird3.display();
    Slingshot3.display();
    bird4.display();
    Slingshot4.display();
    bird5.display();
    Slingshot5.display();
    
  //  drawSprites();

}
function keyPressed(){
if(keyCode === UP_ARROW){

    //Matter.Body.setPosition(bird.body,{x:150,y:100})
Matter.Body.applyForce(bird.body,bird.body.position,{x:-95,y:-95})


// Slingshot.fly();
}
}

//function mouseReleased(){
  // 
    
    
//}
    