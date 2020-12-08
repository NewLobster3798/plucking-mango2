class Sling{
    constructor(body1,point1){
     var option = {
      bodyA:body1,
      pointB:point1,
      stiffness: 0.5,
      length: 1
     }
     this.sling = Constraint.create(option);
     World.add(world,this.sling)
    }
  /*  display(){
  var pointA = this.sling.bodyA.position;
  var pointB = this.sling.pointB;
  push()
  if(pointA.x < 180) {
    strokeWeight("black");
    line(pointA.x,pointA.y, pointB.x, pointB.y);
}
  pop()
    }
    release(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;   
    }*/
}