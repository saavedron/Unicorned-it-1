class Player {

  constructor(y, sprite) {

    this.x = 50;
    this.y = y;
    this.sprite = sprite;
    this.edges = [];

  }

  keyPressed() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += 3;
    }
  }
  creatingEdges() {
    this.edges[0] = createVector(this.x - 1, this.y + 36);
    this.edges[1] = createVector(this.x + 20, this.y + 25);
    this.edges[2] = createVector(this.x + 32, this.y + 4);
    this.edges[3] = createVector(this.x + 55, this.y + 5);
    this.edges[4] = createVector(this.x + 57, this.y + 19);
    this.edges[5] = createVector(this.x + 53, this.y + 22);
    this.edges[6] = createVector(this.x + 56, this.y + 40);
   this.edges[7]=createVector(this.x+48,this.y+47);
  this.edges[8] = createVector(this.x - 1, this.y + 36);
  }
  showEdges() {
    this.creatingEdges();

   // beginShape();
    for (let i = 0; i < this.edges.length; i++) {
      vertex(this.edges[i].x, this.edges[i].y);
    }
    //endShape();
  }
  show() {


    // image(this.sprite, this.x, this.y, this.sprite.width, this.sprite.height);
    this.sprite.position(this.x, this.y);
    this.sprite.size(63, 47);
    this.keyPressed();
  }
  transition() {
    if (this.y + 40 < 0) {
      this.y = height - 40;
    } else if (this.y + 40 >= height) {
      this.y = -20;
    }
  }
  upLifes(){
if(scorePoints%10==0&&scorePoints!=0){
  lifes++;
  newLifeSound.play();
}

  }

}
