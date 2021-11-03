var canvas;
var backgroundImage, zombie1_img, zombie2_img, lawn;
var hungerImage, powerFlowerImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var ghostImage;
var form, player, playerCount;
var allPlayers, zombie1, zombie2, hungers, powerFlowers, obstacles;
var zombies = [];
var castle, castleImg;

function preload(){ 
  backgroundImage = loadImage("assets/HauntedHouse.gif");
  zombie1_img = loadImage("assets/Zombie1.png");
  zombie2_img = loadImage("assets/Zombie2.png");
  lawn = loadImage("assets/grass1.png");
  hungerImage = loadImage("assets/rooster.png");
  powerFlowerImage = loadImage("assets/flower1.gif");
  obstacle1Image = loadImage("assets/apple.png");
  obstacle2Image = loadImage("assets/cherry.gif");
  lifeImage = loadImage("assets/life.png");
  ghostImage = loadImage("assets/ghost.png");
  castleImg = loadImage("assets/House.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
