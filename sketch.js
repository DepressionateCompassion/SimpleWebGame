/*


/* Game Character Global Variables*/
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var lives;
var firemagicleft;
var firemagicright;


/*Scene Global Variables*/
var game_score;
var flagpole;
var platforms;
var onplatform;
var enemies;
var hitByEnemy;
var enemiesisleft;
var enemiesisright;
var Sparks;
var canyonSparks;
var Spacebar;
var LeftKey;
var RightKey;
var AttackKey;


/*Sound Global Variables*/
var jumpSound;
var ZombieBiteSound;
var CoinCollectSound;
var crowdcheerSound;
var FallintoCanyonSound;
var BackgroundMusic;







/*Setup Function*/
function setup() {   //create a canvas that is 1024 in width and 576 in height. let floorpos be 3/4 of 576 and give the character 3 lives.
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    lives = 3;

    //start the game 
    startGame();
   

}


/* draw function containing all the scenes and conditional statements for game character*/

function draw() {
    background(100, 155, 255); // fill the sky blue

    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height / 4); // draw some green ground
    fill(139, 69, 19);
    rect(0, floorPos_y + 10, width, height / 4 - 10) // draw the ground underneath the green ground

    push();
    translate(ScrollPos, 0);
    // Draw clouds.
    drawClouds();
    // Draw mountains.
    drawMountains();
    // Draw trees.
    drawTrees();
    // Draw canyons.
    drawCanyons();
    // Draw collectable items.
    drawCollectables();
    //draw a flag pole
    drawFlagPole();
    //draw platforms
    drawPlatforms();
    //draw enemies
    drawEnemies();
    //draw sparks in the canyon
    drawSpark();

    //check if game char is in any of the collectables range
    collectCollectables();

    //checking if they are near the objects for interaction with game character.
    checkIfGameCharInContactWithEnemies();
    checkIfGameCharIsOverCanyons();
    checkIfCharacterIsUnderAnyPlatforms();

    // moving the clouds
    CloudsMove();

    //Game Character Attacking Enemies
    FireMagicAttackLeft();
    FireMagicAttackRight();





    pop();



    // Draw game character.
    DrawGameChar();

    
    // Logic to make the game character move or the background scroll.
    if (isLeft) {
        if (gameChar_x > width * 0.2) {
            gameChar_x -= 5;
        }
        else {
            ScrollPos += 5; // positive for moving towards background.
        }
    }


    if (isRight) {
        if (gameChar_x < width * 0.8) {
            gameChar_x += 5;
        }
        else {
            ScrollPos -= 5; // negative for moving against the background
        }
    }

    // Logic to make the game character rise and fall.
    if (gameChar_y < floorPos_y) {
        isFalling = true


        //gameChar_y += 2
    }
    else if (gameChar_y >= floorPos_y) {
        isFalling = false
    }

    if (isPlummeting) {
        gameChar_y += 5;
        isLeft = false;
        isRight = false;
    }



    // Update real position of gameChar for collision detection.
    gameChar_world_x = gameChar_x - ScrollPos;

    
    //drawing of Game Score in the canvas.
    drawGold();


    //draw controls
    drawControls();

    //check if game char has reached flagpole.
    GameCharReachFlagPole();
    // draw the life token.
    drawLifeToken();

    //check if player dies
    checkPlayerDie();

    

   // check is game over
    var isGameOver = checkIsGameOver();
    if (isGameOver == true) {
        drawGameOver();
        return;
    }
    if (hitByEnemy == true) {
        if (lives > 0) {
            startGame();
        } return;
    }


}




//=======================================
/*Function to start game, fill up arrays*/
//=======================================

function startGame() {

    gameChar_x = 50;
    gameChar_y = floorPos_y;
    gameChar_width = 15;
    game_score = 0;
    // Boolean variables to control the movement of the game character.
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    onplatform = false;
    hitByEnemy = false;
    enemiesisleft = false;
    enemiesisright = false;


    // Variable to control the background scrolling.
    ScrollPos = 0;

    // Variable to store the real position of the gameChar in the game
    // world. Needed for collision detection.
    gameChar_world_x = gameChar_x - scrollPos;





    // Initialise arrays of scenery objects.

    flagpole = { x_pos: 5000, height: 400, isReached: false };



    var collectable1 = { x_pos: 10, y_pos: floorPos_y - 12, size: 30, isfound: false };
    var collectable2 = { x_pos: 200, y_pos: floorPos_y - 12, size: 30, isfound: false };
    var collectable3 = { x_pos: 1000, y_pos: floorPos_y - 12, size: 30, isfound: false };
    var collectable4 = { x_pos: 1625, y_pos: floorPos_y - 182, size: 30, isfound: false }
    var collectable5 = { x_pos: 1975, y_pos: floorPos_y - 235, size: 30, isfound: false };
    collectables = [collectable1, collectable2, collectable3, collectable4, collectable5]

    //Storing the canyons as variables
    var canyon1 = { x: 100, width: 100 };
    var canyon2 = { x: 800, width: 100 };
    var canyon3 = { x: 1300, width: 100 }
    var canyon4 = { x: 2000, width: 200 }
    var canyon5 = { x: 2500, width: 145 }
    var canyon6 = { x: 3500, width: 100 }
    //creating an array for canyons
    canyons = [canyon1, canyon2, canyon3, canyon4, canyon5, canyon6];

    //storing the trees as variables
    var tree1 = { x: 660, width: 100 };
    var tree2 = { x: 1000, width: 100 };
    var tree3 = { x: 400, width: 100 };
    var tree4 = { x: 1500, width: 100 };
    var tree5 = { x: 1800, width: 100 };
    var tree6 = { x: 2300, width: 100 };
    var tree7 = { x: 2400, width: 100 };
    var tree8 = { x: 4100, width: 100 };
    var tree9 = { x: 3750, width: 100 };
    var tree10 = { x: 3950, width: 100 };
    var tree11 = { x: 3850, width: 100 };
    var tree12 = { x: 4050, width: 100 };
    var tree13 = { x: 4150, width: 100 };
    var tree14 = { x: 4250, width: 100 };
    var tree15 = { x: 4450, width: 100 };
    var tree16 = { x: 4500, width: 100 };


    //creating an array for trees
    trees = [tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10, tree11, tree12, tree13, tree14, tree15, tree16];

    // storing the clouds as variables
    var cloud1 = { x: 200, y: 140, width: 50 };
    var cloud2 = { x: 340, y: 160, width: 50 };
    var cloud3 = { x: 700, y: 200, width: 50 };
    var cloud4 = { x: 2000, y: 175, width: 75 };
    var cloud5 = { x: 4000, y: 140, width: 60 };
    var cloud6 = { x: 1500, y: 150, width: 80 };
    //creating an array for clouds
    clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6];

    //storing the mountain as variables
    var mountain1 = { x: 500, y: 432, width: 96, height: 132 };
    var mountain2 = { x: 120, y: 432, width: 96, height: 132 };
    var mountain3 = { x: 1050, y: 432, width: 96, height: 132 };
    var mountain4 = { x: 1600, y: 432, width: 96, height: 132 };
    var mountain5 = { x: 2200, y: 432, width: 96, height: 132 };
    var mountain6 = { x: 2800, y: 432, width: 96, height: 132 };

    //creating an array for mountains.
    mountains = [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6];

    platforms = [];
    platforms.push(createPlatform(400, floorPos_y - 100, 100));
    platforms.push(createPlatform(600, floorPos_y - 150, 100));
    platforms.push(createPlatform(800, floorPos_y - 200, 100));
    platforms.push(createPlatform(1000, floorPos_y - 260, 100));
    platforms.push(createPlatform(1400, floorPos_y - 50, 100));
    platforms.push(createPlatform(1600, floorPos_y - 70, 100));
    platforms.push(createPlatform(1600, floorPos_y - 170, 100));
    platforms.push(createPlatform(1600, floorPos_y - 340, 100));
    platforms.push(createPlatform(1325, floorPos_y - 280, 100));
    platforms.push(createPlatform(1475, floorPos_y - 245, 30));
    platforms.push(createPlatform(1475, floorPos_y - 350, 30));
    platforms.push(createPlatform(1200, floorPos_y - 330, 100));
    platforms.push(createPlatform(1950, floorPos_y - 220, 300));
    platforms.push(createPlatform(2050, floorPos_y - 85, 30));
    platforms.push(createPlatform(2560, floorPos_y - 50, 20));

    // initializing the array as 
    enemies = [];
    var e1 = new Enemy(600, floorPos_y - 5, 100);
    var e2 = new Enemy(1000, floorPos_y - 5, 100);
    var e3 = new Enemy(2750, floorPos_y - 5, 100)
    var e4 = new Enemy(1600, floorPos_y - 5, 100)
    enemies.push(e1);
    enemies.push(e2);
    enemies.push(e3);
    enemies.push(e4);

    Sparks = [];
    for (var i = 0; i < canyons.length; i++) {
        var canyonspark1 = new Spark(canyons[i].x + 30, 576);
        var canyonspark2 = new Spark(canyons[i].x + 60, 576);
        var canyonspark3 = new Spark(canyons[i].x + 90, 576);
        Sparks.push(canyonspark2);
        Sparks.push(canyonspark1);
        Sparks.push(canyonspark3);
    }

    firemagicleft = [];
    firemagicright = [];

    Spacebar = 0;
    LeftKey = 0;
    RightKey = 0;
    AttackKey = 0;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {


    if (keyCode == "37" && checkIsGameOver() == false && gameChar_world_x>0) {
        isLeft = true;
        LeftKey = 200
    }
    if (keyCode == "39" && checkIsGameOver() == false) {
        isRight = true;
        RightKey = 200
    }

    if (keyCode == "32" && checkIsGameOver() == false) {
        if (gameChar_y >= floorPos_y && isPlummeting == false || onplatform && isPlummeting == false) {
            gameChar_y = gameChar_y - 150
            Spacebar = 296;
            jumpSound.play();
        }

    }

    if (keyCode == "32" && checkIsGameOver() == true) {
        startGame();
        lives = 3;
        crowdcheerSound.stop();
    }

    if (keyCode == "90" && isLeft == true) {
        AttackKey = 200;
        var firemagicattack = createVector(gameChar_world_x, gameChar_y - 25);
        firemagicleft.push(firemagicattack);
        FireMagicSound.play();
    }


    if (keyCode == "90" && isRight == true) {
        AttackKey = 200;
        var firemagicattack = createVector(gameChar_world_x, gameChar_y - 25);
        firemagicright.push(firemagicattack);
        FireMagicSound.play();
    }




}

function keyReleased() {


    if (keyCode == "37") {
        isLeft = false;
        LeftKey = 0;
    }
    if (keyCode == "39") {
        isRight = false;
        RightKey = 0;
    }
    if (keyCode == "32") {
        gameChar_y -= 0;
        Spacebar = 0;
    }
    if (keyCode == "90") {
        AttackKey = 0;
    }


}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function DrawGameChar() {
    if (onplatform && isLeft) {
        drawWalkingLeft();
    }
    else if (onplatform & isRight) {
        drawWalkingRight();
    }
    else if (isLeft & isFalling) {
        drawJumpingLeft();
    }
    else if (isLeft) {
        drawWalkingLeft();
    }
    else if (isRight & isFalling) {
        drawJumpingRight();
    }
    else if (isRight) {
        drawWalkingRight();
    }
    else if (onplatform) {
        drawStandingFrontFacing();
    }
    else if (isFalling || isPlummeting) {
        drawJumpingFacingForwards();
    }
    else {
        drawStandingFrontFacing();
    }
}



// ---------------------------
// Background render functions
// ---------------------------

// Functions to check character is over a canyon.
function checkIfGameCharIsOverCanyons() {
    for (var i = 0; i < canyons.length; i++) {
        var canyon = canyons[i];
        checkIfGameCharIsOverCanyon(canyon);
    }
}

function checkIfGameCharIsOverCanyon(canyon) {
    var cond1 = gameChar_y == floorPos_y;
    var cond2 = gameChar_world_x - gameChar_width / 2 > (canyon.x);
    var cond3 = gameChar_world_x + gameChar_width / 2 < (canyon.x + canyon.width);

    if (cond1 && cond2 && cond3) {
        FallintoCanyonSound.play();
        isPlummeting = true;
        lives--;
    }
}


/*functions to collect collectables*/
function collectCollectables() {
    for (var i = 0; i < collectables.length; i++) {
        var collectable = collectables[i];
        if (collectable.isfound == false) {
            collectCollectable(collectable);

        }
    }
}

function collectCollectable(collectable) {
    var d = dist(gameChar_world_x, gameChar_y, collectable.x_pos, collectable.y_pos)
    if (d < 20) {
        CoinCollectSound.play();
        collectable.isfound = true;
        game_score++;
    }
}


/* function to check if game character has reached flagpole*/
function GameCharReachFlagPole() {
    if (dist(gameChar_world_x, gameChar_y, flagpole.x_pos, floorPos_y) < 20 || gameChar_world_x > flagpole.x_pos) {
        if(BackgroundMusic.isPlaying()){
            BackgroundMusic.stop()
        }
        crowdcheerSound.play();
        flagpole.isReached = true;
    }
}


/* function to check if player is dead*/
function checkPlayerDie() {       //if game character is more than height or is hit by enemy then check if lives is more than 0 if it is, start the game.
    if (gameChar_y > height || hitByEnemy) {
        if (lives > 0) {
            startGame();
        }
    }

}


/*function to check if it is game over*/
function checkIsGameOver() {
    var gameOver = false;
    if (flagpole.isReached || lives < 1) {
        gameOver = true;
    }
    return gameOver;


}



/*function to check if player is under any platforms*/
function checkIfCharacterIsUnderAnyPlatforms() {   // check if game char is falling and if it is in contact with the platforms, stop the falling. Otherwise, it will continue falling.
    if (isFalling) {
        var isContact = false;
        onplatform = false;
        for (var i = 0; i < platforms.length; i++) {
            isContact = platforms[i].checkContact(gameChar_world_x, gameChar_y);
            if (isContact) {
                onplatform = true
                break;
            }
        }
        if (!isContact) {
            gameChar_y = gameChar_y + 5;
        }
    }
}

/*function to check if game character is in contact with enemies */
function checkIfGameCharInContactWithEnemies() {

    if (checkIsGameOver()) {
        return;
    }

    for (var i = 0; i < enemies.length; i++) {
        var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
        if (isContact) {
            ZombieBiteSound.play();
            hitByEnemy = true;
            lives--
            break;
        }


    }



}

/* function to make the cloud move and if they do move above 5000 px which is the game end, return them to 0px. */
function CloudsMove() {
    for (var i = 0; i < clouds.length; i++) {
        clouds[i].x += 0.125
        if (clouds[i].x > 5000) {
            clouds[i].x = clouds[i].x - 5000
            return
        }
    }
}


/* The function to attack while character is facing left */

function FireMagicAttackLeft() {
    for (i in firemagicleft) {
        var fm = firemagicleft[i];
        fill(255, 0, 0);
        ellipse(fm.x - 30, fm.y, 20, 20); // draw the fireball
        fm.x -= 10;
        for (var i = firemagicleft.length - 1; i >= 0; i--) {
            var fm = firemagicleft[i];
            if (fm.x < gameChar_world_x - 200) {
                firemagicleft.splice(i, 1); // if the fireball goes too far from the gamechar, it gets destroyed.
            }

        }
    }
}

/* the function to attack while character is facing right */

function FireMagicAttackRight() {
    for (i in firemagicright) {
        var fm = firemagicright[i];
        fill(255, 0, 0);

        ellipse(fm.x + 30, fm.y, 20, 20) // draw the fireball
        fm.x += 10 // let the fireball go from game char to right of game char.
        for (var i = firemagicright.length - 1; i >= 0; i--) {
            var fm = firemagicright[i];
        }
        if (fm.x > gameChar_world_x + 200) {
            firemagicright.splice(i, 1); // if the fireball is greater than a certain distance, stop the fireball.
        }

    }
}


