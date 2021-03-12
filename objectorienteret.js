let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.style.background = "#ff8";
canvas.width = 1000;
canvas.height = 550;

class player {
  constructor(posY,posX,radius,color,speed) {
    this.posY=posY;
    this.posX=posX;
    this.color=color;
    this.radius=radius;
    this.speed = speed;
    this.difx= 1 * this.speed;
    this.dify= 1 * this.speed;
  }
 draw(context){
context.beginPath();
context.arc(this.posX,
  this.posY,
  this.radius,
  0,
  Math.PI *2);
context.fillStyle=this.color;
context.fill();context.closePath();}


update(){
context.clearRect(0,0,1000,550);
this.draw(context);
if( (this.posX + this.radius) >canvas.width){
  this.difx = -this.difx;}

if( (this.posX - this.radius) < 0){
    this.difx = -this.difx; }

if( (this.posY - this.radius) >canvas.height){
    this.dify = -this.dify;}

if( (this.posY + this.radius) < 0){
    this.dify = -this.dify;}

this.posX +=+ this.difx;
this.posY +=+ this.dify;

}
}


let player1 = new player(100,100,10,"red",1);
player1.draw(context);

let updatePlayerPos = function() {
  requestAnimationFrame(updatePlayerPos);
  player1.update();
}
updatePlayerPos();
