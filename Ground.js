    class Ground {
        constructor(x,y,width,height) {
          var options = {
              isStatic: true,
              density:1
          }
          this.ground = Bodies.rectangle(x,y,width,height,options);   
          this.width=width ;
          this.height=height;
          World.add(world, this.ground);
        }
    
        display(){     
          fill(255);
          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
        }
      }
