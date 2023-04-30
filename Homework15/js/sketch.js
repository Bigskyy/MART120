const keys = {
    w: 87,
    s: 83,
    a: 65,
    d: 68,    
}

class Visual {
    constructor(x, y, size, r, g, b, speedX, speedY){
        this.X = x;
        this.Y = y;
        this.Size = size;
        this.R = r;
        this.G = g;
        this.B = b;
        this.SpeedX = speedX;
        this.SpeedY = speedY;
    }

    display()
    {
        fill(this.R, this.G, this.B);
        circle(this.X, this.Y, this.Size);
    }

    move(width, height) 
    {
        this.X += this.SpeedX;
        this.Y += this.SpeedY;

        if (this.X > width) this.X = 0;
        if (this.X < 0) this.X = width;
        if (this.Y > height) this.Y = 0;
        if (this.Y < 0) this.Y = height;
    }
}

class PLaySurface {
    constructor(width, height, borderThickness, backgroundColor, borderColor){
        this.Width = width;
        this.Height = height;
        this.BorderThickness =  borderThickness;
        this.BackgroundColor = backgroundColor;
        this.BorderColor = borderColor;
    }

    display()
    {
        background(this.BackgroundColor);
        stroke(0);
        fill(0);
    
        this.drawBorder();
        this.drawExit();
    }

    drawBorder()
    {
        fill(this.BorderColor);
        rect(0, 0, this.Width, this.BorderThickness);
        rect(0, 0, this.BorderThickness, this.Height);
        rect(0, this.Height-this.BorderThickness, this.Width, this.BorderThickness);
        rect(this.Width-this.BorderThickness, 0, this.BorderThickness, this.Height-this.BorderThickness);
    }

    drawExit()
    {
        textSize(16);
        text("EXIT", this.Width-50, this.Height-50)
    }
}

var _player;
var _canvas;
var _obstacles = [];

function setup()
{
    setupCanvas();
    createPlayer();
    createObstacles(_canvas);
}

function draw()
{
    drawScene(_canvas, _player, _obstacles);
    handleInput(_player);
    checkIfPlayerExited(_player, _canvas);
    moveObstacles(_obstacles, _canvas);   
}

function mouseClicked()
{
    addObstacleAt(_obstacles, mouseX, mouseY);
}

function setupCanvas()
{
    _canvas = new PLaySurface(600, 600, 10, '#e62d4e', 0);
    createCanvas(_canvas.Width, _canvas.Height);
}

function createPlayer()
{
    _player = {
        X: 100,
        Y: 80,
        Speed: 5,
        Size: 25,
        Color: '#00ff00'
    }    
}

function createRandomSpeed(){
    return (5 + random(5)) * (floor(random(2)) * 2 - 1)  - 5;
}

function createObstacles(canvas)
{
    var numObstacles = floor(random() * 5) + 2;
    for (var i = 0; i < numObstacles; i++)
    {
        addObstacle(_obstacles, canvas);
    }
}

function addObstacle(obstacles, canvas)
{
    addObstacleAt(obstacles, random(canvas.Width), random(canvas.Height), canvas);
}

function addObstacleAt(obstacles, x, y)
{
    obstacles.push(
        new Visual(x, y, random(20) + 10, random(255), random(255), random(255), createRandomSpeed(), createRandomSpeed()));
}

function drawScene(canvas, player, obstacles)
{
    _canvas.display();
    drawPlayer(player);
    drawObstacles(obstacles);
}

function drawPlayer(player)
{
    fill(player.Color);
    circle(player.X, player.Y, player.Size);
}

function drawObstacles(obstacles)
{
    obstacles.forEach(visual => visual.display());
}

function moveObstacles(obstacles, canvas)
{
    obstacles.forEach(obstacle => obstacle.move(canvas.Width, canvas.Height));
}

function handleInput(player)
{
    // handle the keys
    if (keyIsDown(keys.w))
    {
        player.Y -= player.Speed;   
    }
    if (keyIsDown(keys.s))
    {
        player.Y += player.Speed;   
    }
    if (keyIsDown(keys.a))
    {
        player.X -= player.Speed;   
    }
    if (keyIsDown(keys.d))
    {
        player.X += player.Speed;   
    }
}

function checkIfPlayerExited(player, canvas)
{
    // check to see if the character has left the exit
    if (player.X > canvas.Width && player.Y > canvas.Height-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", canvas.Width/2-50, canvas.Height/2-50);
    }
}
