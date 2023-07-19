class Cannon { //cannon is the class
  constructor(x, y, width, height, angle) {
    this.x = x; //this is used to refer to the object that you make from the class
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png")
    this.cannon_base = loadImage("assets/cannonBase.png")
  }
  
  display(){
    push()
    translate(this.x,this.y) //translate is used to capture the position of an object and update it's position
    rotate(this.angle)
    imageMode(CENTER);
    image(this.cannon_image,0,0,this.width,this.height) //image is a predefined function that has 5 properties (image, x, y, w, h)
    pop()
    image(this.cannon_base,70,20,200,200); //don't change x and y because we don't want those positions to change
    noFill()
  }
}
