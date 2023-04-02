var width = 500;
var height = 600;
var originY = 100;
var middle = 250;
var titleFontSize =  22;
var titleFontDirection = 1;

var hatDirection = Math.floor(Math.random()*3)+1;
var hatOffset = 0;

var handOffset = 0;
var handDirection = Math.floor(Math.random()*10)+1;

var legXoffset = 0;
var legXdirection = Math.floor(Math.random()*10)+1;



function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(200);
    textSize(22);

    // title and signature
    fill(0);
    textSize(titleFontSize);
    stroke(0);
    strokeWeight(0);
    text("P5.js Self Portrait", 10, 40);
    
    textSize(22);
    text("Marcia Heydt", 340, 575 );

    // adjust title font size
    titleFontSize += titleFontDirection;
    if ((titleFontSize < 23) || (titleFontSize > 26))
    {
        titleFontDirection *= -1;
    }

    // arms
    strokeWeight(15);
    stroke(240, 220, 220);
    line(middle-125, 355-handOffset, middle-30, originY+200);      
    line(middle+125, 355-handOffset, middle+30, originY+200);   

    // wave both arms (2 items) up and down on Y
    handOffset += handDirection;   
    if ((handOffset < 0 ) || (handOffset > 100))
    {
        handDirection *= -1;
    }

    // legs
    strokeWeight(15);
    stroke(240, 220, 220);
    line(middle-30-legXoffset, originY+355, middle-30-legXoffset, originY+455);      
    line(middle+30+legXoffset, originY+355, middle+30+legXoffset, originY+455);  
    
    // move legs (2-items) back and forth on X axis
    legXoffset += legXdirection;
    if ((legXoffset < 0) || (legXoffset > 10))
    {
        legXdirection *= -1;
    }
    
    // hair
    stroke(0);
    strokeWeight(0);
    fill(250, 240, 190);

    triangle(middle-88, originY+50, middle, originY+148, middle-100, originY+150);    
    triangle(middle+88, originY+50, middle, originY+148, middle+100, originY+150);

    // body
    stroke(0);
    strokeWeight(1);
    fill(178, 50, 128);
    triangle(middle, originY+50+65, middle-80, originY+375, middle+80, originY+375);
    
    // head
    stroke(0);
    strokeWeight(1);
    fill(240, 220, 220);
    circle(middle, originY+50, 175);
   
    // hat
    fill(230, 0, 0);
    stroke(0);
    strokeWeight(1);
    rect(middle-50+hatOffset, originY-55-hatOffset, 100, 30);
    rect(middle-75+hatOffset, originY-25-hatOffset, 150, 5);

    // move hat diagonally back and forth
    hatOffset += hatDirection;
    if ((hatOffset > 20) || (hatOffset < 0))
    {
        hatDirection *= -1;
    }

    // eyes
    fill(40, 40, 255);
    ellipse(middle-40, originY+20, 30, 20);
    ellipse(middle+40, originY+20, 30, 20);

    // nose
    fill(0);
    strokeWeight(3);
    line(middle, originY + 35, middle - 10, originY+50);    
    line(middle - 10, originY+50, middle, originY+50);
    
    // mouth
    fill(255, 40, 40);
    stroke(0);
    strokeWeight(1);
    ellipse(middle, originY+90, 40, 15);

    // line in lips
    line(middle-20, originY+90, middle+20, originY+90);
  
    // decoration
    stroke(200, 180, 220);
    strokeWeight(5);
    point(middle+35, originY+110);
    point(middle+45, originY+100);
}5