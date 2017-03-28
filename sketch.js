var dessert;
var spikeyPlant;

function preload() {
    dessert = loadImage("downloads/dessert-background.jpg");
    spikeyPlant = loadImage("downloads/cactus.png");

}

function setup(){
    createCanvas(600,400);
    background(50);
    image(dessert, 0, 0); 
    image(spikeyPlant, 200, 150);
}

function draw(){
    if(mouseIsPressed){
        plant(mouseX, mouseY);
    }    

}

function plant(x, y){
    image(spikeyPlant, x, y, 97, 150);
}    

//credits go to Mr. B & Lewis for helping 