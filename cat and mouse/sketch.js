
var cat1,cat1image,cat2,cat2image,cat3image,cat_running;
var mouse1,mouse1image,mouse2,mouse2image;
var garden,gardenimage;


function preload() {
    //load the images here
    gardenimage = loadImage('garden.png');
    cat1image = loadImage('cat1.png');
    cat2image = loadImage('cat4.png');
    mouse1image = loadImage('mouse1.png');
    mouse2image = loadImage('mouse2.png');
    cat3image = loadImage('cat2.png');
    cat_running = loadAnimation('cat1.png','cat3.png')
}

function setup(){
    //create tom and jerry sprites here
    createCanvas(800,800);

    garden = createSprite(400,400,50,50);
    garden.addImage(gardenimage);

    cat1 = createSprite(550,550,10,10);
    cat1.addImage(cat1image);
    cat1.scale = 0.2;

    mouse1 = createSprite(150,550,10,10);
    mouse1.addImage(mouse1image);
    mouse1.scale = 0.1;
    
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    console.log();
    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
        cat1.velocityX = -1;
        cat1.addImage(cat3image);
        
    }

    //if(cat1.isTouching('mouse1')){
      //  cat1.velocityX = 0;
        //mouse1.addImage(mouse2image);
   // }
    //if(ketCode === RIGHT_ARROW){
      //  cat1.velocityX = 0;
        //cat1.addImage(cat2image);
    //}


}

