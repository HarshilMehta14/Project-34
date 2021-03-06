class Hero {
  constructor(x, y) {
      var options = {
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 70, options);
      this.image = loadImage("images/Superhero-01.png");
      this.x = x;
      this.y = y;
      this.radius = 50;

      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var p = this.body.position;
      push();
      stroke(255);
      fill(255,255,0);
      translate(p.x, p.y);
      rotate(angle);

      imageMode(CENTER);
      image(this.image, this.x-350, this.y-390, 150, 100); 
      pop();
    }
}