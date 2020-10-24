class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.body.Visiblity = 255;
      World.add(world, this.body);
     
    }

    display(){
      if(this.body.speed < 3){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
         push();
        this.body.Visiblity = this.body.Visiblity - 5;
        tint (255,this.body.Visiblity);
        // rect (this.body.position.x,this.body.position.y,this.width,this.height);
         pop();
      }
    }
    score(){
      if (this.body.Visiblity < 0 && this.body.Visiblity >- 105){
        score++;
      }
    }
  };

 

  
  
