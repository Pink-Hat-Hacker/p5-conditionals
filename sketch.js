var x = 0;
var speed = 50;
var bg;

function setup(){
    noStroke();
    
    bg = loadImage("lucyInTheSkyWithDiamonds.gif");
    createCanvas(800,600);
    background(150);
    
}

function draw(){
    background(bg);
    //changes background to pink when clicked
    if(mouseIsPressed){
        background(255,0,255);
    }
    //changes background to teal when over 200y
    if(mouseY>200){
        background(0, 255, 221);
    }
    
    stroke(255);
    strokeWeight(6);
    noFill();
    
    
    if(mouseY<150){
        fill(0,255,0);
    }
    else{
        fill(195, 0, 255);
    }
    ellipse(x,200,50,50);
    
    //makes circle move on its own
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN");
        speed = speed * -1;
    }
    x = x + speed;
    

    console.log(x);
    
}