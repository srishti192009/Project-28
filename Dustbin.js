class Dustbin{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
            density:0.1,
            friction:1
        }
        this.ground = Bodies.rectangle(x,y,width,height,options);   
        this.width=width ;
        this.height=height;
        this.image=loadImage("images/dustbingreen.png");
        World.add(world, this.ground);
        
      }
  
      display(){     
        fill(255);
        imageMode(CENTER);
        image(this.body.position.x,this.body.position.y,this.width,this.height);
      }
}