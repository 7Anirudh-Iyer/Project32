class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 1
        }
        this.chain = Constraint.create(options);
        this.b=pointB
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }  
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            push()
            stroke("white")
            strokeWeight(4);
            line(pointA.x, pointA.y, this.b.x, this.b.y);
            pop()
        }
    } 
}







