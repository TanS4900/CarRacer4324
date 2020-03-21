var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var track1
var carImg1,carImg2,carImg3,carImg4



var form, player, game;

var cars, car1, car2, car3, car4;

function preload() {

track1 = loadImage('SpritesImg/track.jpg')
carImg1 = loadImage('SpritesImg/car1.png')
carImg2 = loadImage('SpritesImg/car2.png')
carImg3 = loadImage('SpritesImg/car3.png')
carImg4 = loadImage('SpritesImg/car4.png')

}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
if(gameState === 2) {

  game.end();
}

}
