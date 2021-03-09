class player {
  constructor(posY,posX,radius,color) {
    this.posY=posY;
    this.posX=posX;
    this.color=color;
    this.radius=radius;
  }
 make(){
let context = canvas.getContext("2d");
context.beginPath();
context.arc(this.posX,
  this.posY,
  this.radius,
  0,
  Math.PI *2);
context.fillStyle=this.color;
context.fill();
}



























}
