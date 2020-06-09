class Block{
  constructor(x, y, width,height) {
      var options = {
        restitution:1,
          friction:1,
          density:1
      }
      
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
     fill(137, 255, 143);
      rect(0,0,this.width,this.height);
      pop();
    }
}