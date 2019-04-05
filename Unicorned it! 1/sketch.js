let collider=false;
let player, soundtrack, newLifeSound, collideSound, pointsSound;
let obstacle = [];
let playerY, invisibility=false,counter=0;
let score = 'SCORE: ';
let scorePoints=0, lifes = 1;
let points = [];
let character;
let rainbow, lifesImage;
let pointsContact, destroyRainbow;
let button;

function preload() {
  character = createImg('unicorn.gif');
  rainbow = loadImage('rainbow1.png');
  soundtrack= loadSound('music/rainbowSong.mp3');
  lifesImage= loadImage('lifes.png');
  newLifeSound= loadSound('soundEffects/newLife.mp3');
  collideSound= loadSound('soundEffects/collideSound.mp3');
  pointsSound = loadSound('soundEffects/points.mp3');
}
function beginning() {
  noCursor();
  loop();
  button.remove();
  soundtrack.loop();
}

function setup() {
  createCanvas(800, 400);
  noLoop();

  button = createButton("Start!");
  button.size(75,50);
  button.position(width/2-55,height/2-30);
  button.mousePressed(beginning);
  player = new Player(height / 2, character);
  playerY = player;

  for (let i = 0; i < 4; i++) {
    obstacle[i] = new Obstacle(width - 75, random(0, height), random(8, 12), random(75, 250), 30);
}
  for (let j = 0; j < 3; j++) {

    points[j] = new Points(width - 50, random(0, height), rainbow, random(2, 4));
  }



}

function draw() {
  collider=false;
  background(0);
  fill(255)
  if(lifes==0){
    noLoop();
    soundtrack.stop();
  }
  for (let i = 0; i < obstacle.length; i++) {
    obstacle[i].move();
    obstacle[i].display();
  obstacle[i].collision();



  }
  player.showEdges();
  player.transition();
  player.show();

    for (let k = points.length-1; k >=0  ; k--) {
      if (points[k].upScore()) {
        points.splice(k, 1);
        scorePoints++;
        points.push(new Points(width - 50, random(0, height), rainbow, random(2, 4)));
        player.upLifes();

    }
}
  for (let j = 0; j < points.length; j++) {
    points[j].show();
    points[j].move();
    points[j].upScore();
    points[j].continuity();
  }


  text(score, 0, 15);
  text(scorePoints, 50, 15);
  text(lifes,width-16,height-15);
  imageMode(CENTER);
  image(lifesImage,width-35,height-22,36,36);


}
