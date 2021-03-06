const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gr, stand1,stand2;


function setup(){
    var canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;

//ground
gr = new Ground(500,540,1000,15);

//stands
stand1=new Ground(400,435,279,15);
stand2 = new Ground(800,420,179,15);
 
//stacking the blocks
//bottom line
block1 = new Block(330,430,30,40);
block2 = new Block(330,430,30,40);
block3 = new Block(360,430,30,40);
block4 = new Block(390,430,30,40);
block5 = new Block(420,430,30,40);
block6 = new Block(450,430,30,40);
block7 = new Block(360,430,30,40);
block8 = new Block(390,430,30,40);
block9 = new Block(420,430,30,40);

//second line from bottom
block10 = new Block(345,400,30,40);
block11 = new Block(375,400,30,40);
block12 = new Block(405,400,30,40);
block13 = new Block(435,400,30,40);
block14 = new Block (325,400,30,40);
block15 = new Block(345,400,30,40);
block16 = new Block(375,400,30,40);
block17 = new Block(405,400,30,40);

//third
block18 = new Block(380,355,120,30);

//fourth
block19 = new Block(390,350,120,30);

//top
block20 = new Block (390,345,30,40);

//bottom line 2
block21 = new Block(755,415,30,40);
block22 = new Block(785,415,30,40);
block23 = new Block(815,415,30,40);
block24 = new Block(845,415,30,40);

//second line from bottom 2
block25 = new Block(770,390,30,40);
block26 = new Block(800,390,30,40);
block27 = new Block(830,390,30,40);

//third 2
block28 = new Block(800,370,30,40);

//fourth 2
block29 = new Block(800,350,30,40);

//fifth 2
block30 = new Block(800,330,30,40);

//sixth 2
block31 = new Block(800,310,30,40);

//the block to shoot
shooter = new Polygon(110,250,45,45);

//holder
holder = new SlingShot(shooter.body,{x:110,y:250});
}

function draw(){
    background(0,151,157);
    Engine.update(engine);
    strokeWeight(4);
  
    gr.display();
    stand1.display();
    stand2.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();

    shooter.display();

    holder.display();
}

function mouseDragged(){
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    holder.fly();
}
