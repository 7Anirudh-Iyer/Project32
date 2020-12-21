class Base{
    constructor(x,y,width,height){
        var json={
            restitution: 0.0001,
            density: 0.1,
            friction: 0
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,json)
        this.w=width
        this.h=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var a=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(a)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.w,this.h)
        pop()
    }
}