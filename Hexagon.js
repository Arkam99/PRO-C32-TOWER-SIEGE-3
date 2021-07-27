class Hexagon {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution :0.8,
          friction :1.0,
          density :1.0
         
      }
     
      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("hexagon-yellow.png");
     // this.radius=50;
      World.add(world, this.body);
     
    }
    display(){
     
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y,80,50);
    }
  };