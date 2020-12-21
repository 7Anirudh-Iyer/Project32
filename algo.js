

function detectollision(lstone,lmango){

  this.a=255

stoneBodyPosition=lstone.body.position
  mangoBodyPosition=lmango.body.position
  
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      World.remove(world,lmango)
      tint(this.a,255)
      this.a=this.a-10
    }

  }