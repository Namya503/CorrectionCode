class Slingshot{
    constructor(body1,point2 ){
        var options = {
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
        }
        this.pointB=point2
        this.bodyA=body1
        this.sling=Constraint.create(options)
        World.add(world,this.sling);

    }
    fly(){
        this.bodyA=null 
    }
    display(){
        if(this.bodyA){
            strokeWeight(4)
           line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
}