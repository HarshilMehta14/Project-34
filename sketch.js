const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, hero, rope;
var box1, box2, box3, box4, box5, box6, box7;
var box8 ,box9 ,box10 ,box11 ,box12, box13 ,box14;
var box15 ,box16 ,box17 ,box18 ,box19 ,box20 ,box21;


function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500, 500, 1000, 10);

    hero = new Hero(350, 400, 50);

    rope = new Rope(hero.body, {x : 350, y : 50});

    box1 = new Box(750, 100);
    box2 = new Box(750, 150);
    box3 = new Box(750, 200);
    box4 = new Box(750, 250);
    box5 = new Box(750, 300);
    box6 = new Box(750, 350);
    box7 = new Box(750, 400);

    box8 = new Box(800, 150);
    box9 = new Box(800, 200);
    box10 = new Box(800, 250);
    box11 = new Box(800, 300);
    box12 = new Box(800, 350);
    box13 = new Box(800, 400);

    box14 = new Box(850, 400);
    box15 = new Box(850, 50);
    box16 = new Box(850, 100);
    box17 = new Box(850, 150);
    box18 = new Box(850, 200);
    box19 = new Box(850, 250);
    box20 = new Box(850, 300);
    box21 = new Box(850, 350);

    box22 = new Box(900, 150);
    box23 = new Box(900, 200);
    box24 = new Box(900, 250);
    box25 = new Box(900, 300);
    box26 = new Box(900, 350);
    box27 = new Box(900, 400);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();

    hero.display();

    rope.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

}
function mouseDragged()
{
    Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
function mouseReleased()
{
    Matter.Body.applyForce(hero.body, hero.body.position, {x:50, y:-30});
}