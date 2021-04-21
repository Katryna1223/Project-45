
class Form{
    constructor(){
    
      this.title = createElement('h2');  
      this.input = createInput('Enter your name')//collect input formuser
      this.button = createButton('Submit');//our button
      this.greeting = createElement('h2');//we add an element  to html
      this.reset = createButton('Reset');
      this.greet2 = createElement("h2");
    }
    display(){
        this.title.html("Catch the Cherries");//displays our title
        this.title.position(displayWidth/2, 0);
        this.input.position(displayWidth/2-40, displayHeight/2-50);
        this.button.position(displayWidth/2-30, displayHeight/2);
        this.reset.position(displayWidth-100, 20);
        //"this" refers to the object calling the function
        this.button.mousePressed(()=>{//the arrow function makes this refer to the form object not the button object
            this.input.hide();
            this.button.hide();
            this.title.hide();
            
            player.name = this.input.value(); 
            
            playerCount +=1;
            player.index=playerCount;//makes the index the count
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello! " + player.name);
            this.greeting.position(displayWidth/2-50, 20);
        })
     //if(gameState === 2){
        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
            //remove players branch
            var playerRef = database.ref('players');
            playerRef.remove();//removes entire player structure
        })
   // }
        
    }
    end(){
        //come back after we've updated the player class
         this.greet2.html(player.name + "caught"+ player.cherries);
        this.greet2.position(displayWidth/2-70, displayHeight/4);
    }
    hide(){
        this.greeting.hide();
        this.title.hide();
        this.button.hide();
        this.input.hide();
    }
}