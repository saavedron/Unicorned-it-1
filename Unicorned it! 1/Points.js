class Points {
  constructor(x, y, sprite, speed) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.speed = speed;
  }
  show() {
    imageMode(CENTER);
    image(this.sprite, this.x, this.y, 50, 20);


  }
  move() {
    this.x -= this.speed;
    this.continuity();
  }
  continuity() {
    if (this.x < 0) {
      this.x = width;
      this.y = random(0, height);
    }


  }
upScore(){
pointsContact=collideRectPoly(this.x,this.y,50,20,playerY.edges);
  if(pointsContact){
    pointsSound.play();
    return true;
  }
}












}
