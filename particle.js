class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.colour=colour(random(0,225),random(0,225),random(0,225));
      fill(this.colour);
      circle(pos.x, pos.y, this.r);
    }
  };
