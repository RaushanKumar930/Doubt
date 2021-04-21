class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = 10
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
      circle(pos.x, pos.y, 10);
    }
  };
