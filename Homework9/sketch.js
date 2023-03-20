var width = 800;
var height = 4000.0;

function setup() {
    createCanvas(500, 600);
}

function draw() {
    var top = 100;
    var middle = 250;

    background(200);
    textSize(22);

    // title and signature
    fill(0);
    textSize(22);
    stroke(0);
    strokeWeight(0);
    text("P5.js Self Portrait", 10, 40);
    text("Marcia Heydt", 340, 575 );

    // arms
    strokeWeight(15);
    stroke(240, 220, 220);
    line(middle-125, top+155, middle-30, top+200);      
    line(middle+125, top+155, middle+30, top+200);   

    // legs
    strokeWeight(15);
    stroke(240, 220, 220);
    line(middle-30, top+355, middle-30, top+455);      
    line(middle+30, top+355, middle+30, top+455);  
    
    // hair
    stroke(0);
    strokeWeight(0);
    fill(250, 240, 190);

    triangle(middle-88, top+50, middle, top+148, middle-100, top+150);    
    triangle(middle+88, top+50, middle, top+148, middle+100, top+150);
    //line(middle-100, top+50, middle-120, top+100);

    // body
    stroke(0);
    strokeWeight(1);
    fill(178, 50, 128);
    triangle(middle, top+50+65, middle-80, top+375, middle+80, top+375);
    
    // head
    stroke(0);
    strokeWeight(1);
    fill(240, 220, 220);
    circle(middle, top+50, 175);
   
    // hat
    fill(230, 0, 0);
    stroke(0);
    strokeWeight(1);
    rect(middle-50, top-55, 100, 30);
    rect(middle-75, top-25, 150, 5);

    // eyes
    fill(40, 40, 255);
    ellipse(middle-40, top+20, 30, 20);
    ellipse(middle+40, top+20, 30, 20);

    // nose
    fill(0);
    strokeWeight(3);
    line(middle, top + 35, middle - 10, top+50);    
    line(middle - 10, top+50, middle, top+50);
    
    // mouth
    fill(255, 40, 40);
    stroke(0);
    strokeWeight(1);
    ellipse(middle, top+90, 40, 15);
    // line in lips
    line(middle-20, top+90, middle+20, top+90);
  
    // decoration
    stroke(200, 180, 220);
    strokeWeight(5);
    point(middle+35, top+110);
    point(middle+45, top+100);
}5