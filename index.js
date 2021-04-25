function load_images() {
    virus_image = new Image
    virus_image.src = "Assets/v1.png"

    player_image = new Image
    player_image.src = "Assets/superhero.png"

    gem_image = new Image
    gem_image.src = "Assets/gemm.png"
}

function init() {
    canvas = document.getElementById("canvas");

    // Changing the width and height of canvas using JS
    W = 700
    H = 500

    canvas.width = W
    canvas.height = H

    // initializing context
    pen = canvas.getContext('2d')

    enemies = [{
        x: 150,
        y: 50,
        w: 60,
        h: 60,
        speed: 20,
    },
    {
        x: 300,
        y: 150,
        w: 60,
        h: 60,
        speed: 30,
    },
    {
        x: 450,
        y: 20,
        w: 60,
        h: 60,
        speed: 40,
    }];

    player = {
        x: 20,
        y: H / 2,
        w: 60,
        h: 60,
        speed: 20,
        moving: false
    }

    gem = {
        x: W - 80,
        y: H / 2,
        w: 60,
        h: 60
    }

    // Create an event listener
    canvas.addEventListener('mousedown', () => {
        player.moving = true
    })

    canvas.addEventListener('mouseup', () => player.moving = false)
}

// Game Loop
function draw() {

    //Clear the old screen (entire screen)
    pen.clearRect(0, 0, W, H)

    // Draw Player
    pen.drawImage(player_image, player.x, player.y, player.w, player.h)

    // Draw Gem
    pen.drawImage(gem_image, gem.x, gem.y, gem.w, gem.h)

    //Draw enimies on screen
    for (let i = 0; i < enemies.length; i++) {
        pen.drawImage(virus_image, enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h)
    }
}

function update() {

    if (player.moving) {
        player.x += player.speed
    }

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].y += enemies[i].speed
        if (enemies[i].y > H - enemies[i].h || enemies[i].y < 0) {
            enemies[i].speed *= -1
        }
    }

}

function gameLoop() {
    draw()
    update()
}

load_images()

init()

setInterval(gameLoop, 100)