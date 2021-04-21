class Game{//will read the gamestate
    construcor(){

    }
    getState(){
        //reads the gamestate from database
        var gameStateRef = database.ref('gamestate');
        gameStateRef.on("value", (data)=>{//anonymous function that changes when we change something
            gameState = data.val();//we have to get the value from JSON
        })//our listener
    }
    update(state){
        database.ref('/').update({
            gamestate: state
        });
    }

    async start(){ //this function will wait until the reading is done 
        if(gameState === 0){
            player = new Player();
            //".once" = it will read the playerCount value once
            var playerRef = await database.ref('PlayerCount').once("value");//the computer will now await until the reading of the database is complete
            if(playerRef.exists()){ // when the value is read, we send it to the playerCount
                playerCount = playerRef.val();
                player.getCount();

            }
            form = new Form();
            form.display();

        }
       
        player1 = createSprite(60, 60);
        player1.addImage('girl', girlImg);
        player1.scale = 0.2;
        player1.visible = false;
        player2 = createSprite(displayWidth-60, displayHeight-60);
        player2.addImage('boy', boyImg);
        player2.scale = 0.2;
        player2.visible = false;
        players = [player1, player2]
        
    }
    play(){
        background(spiralImg);
        form.hide();
        for(var i=0; i < cherries.length; i++){
          var current = cherries[i]
            current.display();
         }
         player1.visible = true;
         player2.visible = true;
        Player.getPlayerInfo();//we are calling the class name(hance the capital P)
        


        if(allPlayers != undefined){

            var index = 0;
    
            for(var plr in allPlayers){
                index = index+1;// player 1 will be indexed 1 not 0

               
               var x = allPlayers[plr].position.x;
               var y = allPlayers[plr].position.y;
               
                players[index-1].x = x; //we are changing the index so we use index-1
               
                players[index-1].y = y; 

                //catch the cherries
                for(var i=0; i < cherries.length; i++){
                        var current = cherries[i]
                        var currentPlayer = players[index-1]
                        if(currentPlayer.isTouching(current.cherry)){
                            console.log("I'm here");
                            current.cherry.destroy();
                            player.cherries++;
                            player.update();
                            
                        }
                   }
               
            } 

        }
        
        if(keyIsDown(UP_ARROW) && player.index != null){
            player.position.y-=10;
            player.update();
        }
        if(keyIsDown(DOWN_ARROW) && player.index != null){
            player.position.y+=10;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW) && player.index != null){
            player.position.x+=10;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW) && player.index != null){
            player.position.x-=10;
            player.update();
        }
        //"player" references the player on the browser screen
  
        drawSprites();
    }
    end(){
        console.log("Game Ended");
        console.log(player.rank);
        form.end();
     
    }
    // => is an arrow function that binds the function to the parent class rather than an anonymous function that would bind it to the gameRef
}