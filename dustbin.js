class Dustbin{
    constructor( angle) {
        var options = {
       
    isStatic:true
        }
       
        this.bodycenter=Bodies.rectangle(width/2, 650, 150, 10, {isStatic:true} );
        World.add(world, this.bodycenter);
        
        this.bodycenter1=Bodies.rectangle(width/2-75, 650, 10, 50 , {isStatic:true} );
        World.add(world,this.bodycenter1);
        
        this.bodycenter2=Bodies.rectangle(width/2+75, 650, 10, 50 , {isStatic:true} );
        World.add(world, this.bodycenter2);
        this.image=loadImage("dustbingreen.png")
    }
      display(){
       imageMode(CENTER)
        image(this.image,this.bodycenter.position.x,this.bodycenter.position.y,150,80)

  
    
      }
}
