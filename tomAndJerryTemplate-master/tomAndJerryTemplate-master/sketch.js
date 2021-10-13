var bg
var cat,cat1,cat2,cat3,cat4
var mouse,mouse1,mouse2,mouse3,mouse4

function preload() {
bg=loadImage("images/garden.png");
cat1=loadAnimation("images/cat1.png");
cat2=loadAnimation("images/cat2.png","images/cat3.png");
cat4=loadAnimation("images/cat4.png");
mouse1=loadAnimation("images/mouse1.png");
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
cat=createSprite(800,600);
mouse=createSprite(100,600);
cat.addAnimation("sittingCat",cat1);
cat.scale=.15;
mouse.addAnimation("cheeseMouse",mouse1);
mouse.scale=.10;
}

function draw() {
background(bg);
if(keyDown(LEFT_ARROW)){
cat.velocityX=-4;
cat.addAnimation("runningCat",cat2);
cat.changeAnimation("runningCat");
mouse.addAnimation("dancingMouse",mouse2);
mouse.changeAnimation("dancingMouse");
}

if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("standingCat",cat4);
    mouse.addAnimation("standingMouse",mouse4);
    cat.changeAnimation("standingCat",cat4);
    mouse.changeAnimation("standingMouse",mouse4);
}

    drawSprites();
}







