class box extends Base{
    constructor(x,y){
        super(x,y,windowWidth/25,windowHeight/10)
        this.a=255
        this.color=color(random(0,255),random(0,255),random(0,255))
    }
    display(){

        var score=0

        if(this.body.speed<7){
            rectMode(CENTER)
            fill(this.color)
            rect(this.body.position.x,this.body.position.y,windowWidth/25,windowHeight/10)
        }
        else{
            push()
            tint(255,this.a)
            this.a=this.a-1
            fill(this.color)
            pop()
        }

    }
    score(){
        if(this.a<0&&this.a>-100){
            score=score+1
        }
    }
}