
class Player{
    constructor(){
        //the four properties of Player
        this.name = null;
        this.cherries = 0;
        this.index = null;//which number player
        this.lives = 5;
        this.position = {x: 20, y: 20}
    }
    getCount(){
        database.ref('PlayerCount').on("value",(data)=>{
            playerCount = data.val(); 
        });//refer to database playerCount and listen to it to update our local variable
    }
    //let's write to the database
    updateCount(count){
        
        database.ref('/').update({
            PlayerCount: count
        })
    }
    /*updatePosition(x, y){
        this.position.x = x;
        this.position.y = y;
    }
   //just change player.lives and then update, same for cherries 
    updateLives(lives){
        database.ref("")
     this.lives = lives;
    }
    */

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
           name: this.name,
           cherries: this.cherries,
           lives: this.lives,
           position: this.position
        });
    }
/* will probably use to mark reaching the door
   //gets the cars at end from the database
    getCarsAtEnd(){
        var carsAtEndRef = database.ref('carsAtEnd');
        carsAtEndRef.on("value", (data)=>{
            this.rank = data.val();//getting info from database
        });
    }
  
    */


    //static function- not attached to each object of the class, but all the objects of the class. They are called by the class
    static getPlayerInfo(){
        //stores players' data in JSON
        
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();//allPlayers is now the values in the players branch
        });
    }
}