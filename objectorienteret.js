let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.style.background = "#ff8";
canvas.width = 1000;
canvas.height = 550;

class player {
  constructor(posY,posX,radius,color) {
    this.posY=posY;
    this.posX=posX;
    this.color=color;
    this.radius=radius;
  }
 draw(context){
context.beginPath();
context.arc(this.posX,
  this.posY,
  this.radius,
  0,
  Math.PI *2);
context.fillStyle=this.color;
context.fill();}
}
let player1 = new player(100,100,10,"red");
player1.draw(context);
