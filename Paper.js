class Paper{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            density:1.2,
            friction:0.5,
            restitution:0.3
        }
        this.body = Bodies.circle(x,y,radius,options);   
        this.radius=radius;
        this.image=loadImage("images/paper.png");
        World.add(world, this.ground);
      }
  
      display(){     
        fill("yellow");
        imageMode(CENTER);
        image(this.body.position.x,this.body.position.y,this.radius);
      }
}