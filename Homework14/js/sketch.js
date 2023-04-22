const keys = {
    w: 87,
    s: 83,
    a: 65,
    d: 68,    
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
    _canvas = {
        Width: 600,
        Height: 600,
        BorderThickness: 10,
        BackgroundColor: '#e62d4e',
        BorderColor: 0
    };
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
    // 5 to 10 random obstacles
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
        {
            X: x,
            Y: y,
            XSpeed: createRandomSpeed(),
            YSpeed: createRandomSpeed(),
            Size: random(20) + 10,
            R: random(255),
            G: random(255),
            B: random(255)
        }
    );
}

function drawScene(canvas, player, obstacles)
{
    drawCanvas(canvas);
    drawPlayer(player);
    drawObstacles(obstacles);
}

function drawCanvas(canvas){
    background(canvas.BackgroundColor);
    stroke(0);
    fill(0);

    drawBorder(canvas);
    drawExit(canvas);
}

function drawBorder(canvas)
{
    fill(canvas.BorderColor);
    // top border
    rect(0, 0, canvas.Width, canvas.BorderThickness);
    // left border
    rect(0, 0, canvas.BorderThickness, canvas.Height);
    // bottom border
    rect(0, canvas.Height-canvas.BorderThickness, canvas.Width, canvas.BorderThickness);
    // right upper border
    rect(canvas.Width-canvas.BorderThickness, 0, canvas.BorderThickness, canvas.Height-canvas.BorderThickness);
}

function drawExit(canvas)
{
    // exit message
    textSize(16);
    text("EXIT", canvas.Width-50, canvas.Height-50)
}

function drawPlayer(player)
{
    // player
    fill(player.Color);
    circle(player.X, player.Y, player.Size);
}

function drawObstacle(obstacle)
{
    // potential enemy
    fill(obstacle.R, obstacle.G, obstacle.B);
    // draw the shape
    circle(obstacle.X, obstacle.Y, obstacle.Size);
}

function drawObstacles(obstacles)
{
    obstacles.forEach(drawObstacle);
}

function drawShape(shape)
{
    fill(120,130,140);
    circle(shape.X, shape.Y, 25);
}

function moveObstacles(obstacles, canvas)
{
    obstacles.forEach(obstacle => moveObstacle(obstacle, canvas));
}

function moveObstacle(obstacle, canvas)
{
    obstacle.X += obstacle.XSpeed;
    obstacle.Y += obstacle.YSpeed;

    if (obstacle.X > canvas.Width)
    {
        obstacle.X = 0;
    }
    if (obstacle.X < 0)
    {
        obstacle.X = canvas.Width;
    }
    if (obstacle.Y > canvas.Height)
    {
        obstacle.Y = 0;
    }
    if (obstacle.Y < 0)
    {
        obstacle.Y = canvas.Height;
    }
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
