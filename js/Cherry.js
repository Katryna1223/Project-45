//make a cherry class that will make the cherries sprites when called
class Cherry{
    constructor(x, y, img){
        this.cherry = createSprite(x, y, 10, 10);
        this.cherry.addImage('cherry',img);
        this.cherry.scale = 0.2;
        this.cherry.visible = false;
    } 
    display(){
        this.cherry.visible = true;
    }
}