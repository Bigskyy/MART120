const keys = {
    w: 87,
    s: 83,
    a: 65,
    d: 68,    
}

var player = {
    X: 100,
    Y: 80,
    Speed: 5,
    Size: 25,
    Color: '#00ff00'
}

function createRandomSpeed(){
    return Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

var obstacles = [
    {
        X: 30,
        Y: 50,
        XSpeed: createRandomSpeed(),
        YSpeed: createRandomSpeed(),
        Size: 10,
        Color: '#0000ff'
    },
    {
        X: 30,
        Y: 50,
        XSpeed: createRandomSpeed(),
        YSpeed: createRandomSpeed(),
        Size: 30,
        Color: '#ff0000'
    }
]

const canvas = {
    Width: 600,
    Height: 600,
    BorderThickness: 10,
    BackgroundColor: '#e62d4e'
}

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(canvas.Width, canvas.Height);
}

function draw()
{
    background(canvas.BackgroundColor);
    stroke(0);
    fill(0);
    
    // top border
    rect(0, 0, canvas.Width, canvas.BorderThickness);
    // left border
    rect(0, 0, canvas.BorderThickness, canvas.Height);
    // bottom border
    rect(0, canvas.Height-canvas.BorderThickness, canvas.Width, canvas.BorderThickness);
    // right upper border
    rect(canvas.Width-canvas.BorderThickness, 0, canvas.BorderThickness, canvas.Height-canvas.BorderThickness);

    // exit message
    textSize(16);
    text("EXIT", canvas.Width-50, canvas.Height-50)

    // player
    fill(player.Color);
    circle(player.X, player.Y, player.Size);

    // handle the keys
    if(keyIsDown(keys.w))
    {
        player.Y -= player.Speed;   
    }
    if(keyIsDown(keys.s))
    {
        player.Y += player.Speed;   
    }
    if(keyIsDown(keys.a))
    {
        player.X -= player.Speed;   
    }
    if(keyIsDown(keys.d))
    {
        player.X += player.Speed;   
    }

    // check to see if the character has left the exit
    if (player.X > canvas.Width && player.Y > canvas.Height-50)
    {
        console.log('you win');
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", canvas.Width/2-50, canvas.Height/2-50);
    }
    
    obstacles.forEach(obstacle => {
        // potential enemy
        fill(obstacle.Color);
        // draw the shape
        circle(obstacle.X, obstacle.Y, obstacle.Size);

        // move the shape
        obstacle.X += obstacle.XSpeed;
        obstacle.Y += obstacle.YSpeed;
        // check to see if the shape has gone out of bounds
        if (obstacle.X > width)
        {
            obstacle.X = 0;
        }
        if (obstacle.X < 0)
        {
            obstacle.X = width;
        }
        if (obstacle.Y > height)
        {
            obstacle.Y = 0;
        }
        if (obstacle.Y < 0)
        {
            player.Y = height;
        }
    });

    // create the shape based on the mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
