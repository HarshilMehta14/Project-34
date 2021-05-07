class Monster{
    constructor(x, y){
        var options_Monster = {            
            'density' : 3
        }
        
        this.body = Bodies.rectangle(x, y, 150, 150, options_Monster);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.image = loadImage("images/Monster-01.png");
    }

    change_image()
    {
        this.image = loadImage("images/Monster-02.png");        
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 150, 150);
        pop();
    }

   
}