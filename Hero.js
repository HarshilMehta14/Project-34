class Hero {
  constructor(x, y) {
      var options = {
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.image = loadImage()
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
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      
      pop();
    }
}