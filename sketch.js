//multiplayer and single player mode?
var canvas, gameState = 0, playerCount=0, database, form, player, players, player1, player2, game;
var allPlayers, girlImg, cherryImg, boyImg, spiralImg, girl, boy;
//what i still need
var lb1, lb2, lb3, lb4, door;
//how can I download sounds here?
//i will create a cherry class and use an array to place the cherries
var cherries =[];//, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;

//add a story at the end
function preload(){
    //load the images we need in the game.
    girlImg = loadImage('images/girl0.png');
    cherryImg = loadImage('images/cherry0.png');
    boyImg = loadImage('images/boy0.png');
    spiralImg = loadImage('images/swirlBackground.jpg')
}

function setup(){

    createCanvas(displayWidth-20 , displayHeight-30);
 
    database = firebase.database();
    //cherries = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10]
     game = new Game();
     game.getState();
     game.start();

     for(var i=0; i<10; i++){
        //var current = cherries[i];
       var current = new Cherry(random(100, displayWidth-40), random(100, displayHeight-40), cherryImg);      
        cherries[i]=current;
 
     }
     console.log(cherries);
}

function draw(){
    //when 4 players come, gamestate becomes play
    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
        clear();//clears the screen of the form elements
        game.play();
    }
    if(gameState === 2){
        //game.update(2);
        game.end();
    }
    /*if(frameCount%100===0){
        var lives = lives - 1;
        player.updateLives(player.lives);
        var position = {x: 320, y: 190};
        player.updatePosition(position);
    }
  */
    drawSprites();
} 
