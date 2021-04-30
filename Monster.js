class Monster{
    constructor(x, y){
        var options_Monster = {
            'isStatic' : true,
            'density' : 0.05,
            'friction' : 1
        }
        
        this.body = Bodies.rectangle(x, y, 70, 70, options_Monster);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.image = loadImage("images/Monster-01.png");
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.image, this.x, this.y, 70, 70);
        pop();
    }

    
}