 class Obstacle {

  constructor(x, y, xSpeed, width, height) {

    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.width = width;
    this.height = height;
    this.constSpeed=xSpeed;
  }
  display() {
    push();
    strokeWeight(4);
    stroke(255,255,0);
    fill(200, 100, 200);
    rect(this.x, this.y, this.width, this.height,30);
    pop();
  }
  move() {

    this.x -= this.xSpeed;
      if (this.x + this.width < 0) {
        this.xSpeed=this.constSpeed;
        this.x = width;
        this.y = random(0, height);

      }
  }

  collision() {
   collider=collideRectPoly(this.x,this.y,this.width, this.height,playerY.edges);

   if(collider){
collideSound.play();
     lifes--;
   this.xSpeed=300;
 }

}







}
