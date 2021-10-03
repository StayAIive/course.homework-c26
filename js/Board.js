class Board{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.pos = this.body.position;
        this.image = loadImage("./assets/board.png");

        World.add(world,this.body);
    }

    display(){
        push ()
        imageMode(CENTER)
        image(this.image,this.pos.x,this.pos.y,this.w,this.h);
        pop ()
    }
}
