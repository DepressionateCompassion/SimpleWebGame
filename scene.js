/*

*/











// Function to draw cloud objects.
function drawClouds() {
    for (var i = 0; i < clouds.length; i++) {

        var cloud = clouds[i]
        drawCloud(cloud)
    }

}

// function to draw a single cloud
function drawCloud(cloud) {
    noStroke()
    fill(128, 128, 128);
    ellipse(cloud.x, cloud.y + 5, cloud.width + 3, cloud.width);
    ellipse(cloud.x - 33, cloud.y + 5, cloud.sx + 3, cloud.sy);
    ellipse(cloud.x + 30, cloud.y + 5, cloud.sx + 3, cloud.sy); //Cloud 1 

    ellipse(cloud.x + 220, cloud.y + 5, cloud.width + 3, cloud.width);
    ellipse(cloud.x + 250, cloud.y + 5, cloud.width + 3, cloud.width);
    ellipse(cloud.x + 280, cloud.y + 5, cloud.width + 3, cloud.width);
    ellipse(cloud.x + 235, cloud.y - 30, cloud.width + 3, cloud.width); //cloud 1 shadow

    fill(255);
    ellipse(cloud.x, cloud.y, cloud.width, cloud.width);
    ellipse(cloud.x - 30, cloud.y, cloud.width, cloud.width);
    ellipse(cloud.x + 30, cloud.y, cloud.width, cloud.width); //cloud 2 

    ellipse(cloud.x + 250, cloud.y, cloud.width, cloud.width);
    ellipse(cloud.x + 220, cloud.y, cloud.width, cloud.width);
    ellipse(cloud.x + 280, cloud.y, cloud.width, cloud.width);
    ellipse(cloud.x + 250, cloud.y - 30, cloud.width, cloud.width);
    ellipse(cloud.x + 235, cloud.y - 30, cloud.width, cloud.width); //cloud2 shadow

}

// Function to draw mountains objects in the array.
function drawMountains() {
    for (var i = 0; i < mountains.length; i++) {
        var mountain = mountains[i]
        drawMountain(mountain)
    }

}

// function to draw a single mountain
function drawMountain(mountain) {
    fill(222, 184, 135)
    quad(mountain.x, mountain.y, mountain.x + 26, mountain.y - 50, mountain.x + 70, mountain.y - 100, mountain.x + 96, mountain.y)
    quad(mountain.x + 96, mountain.y, mountain.x + 70, mountain.y - 80, mountain.x + 175, mountain.y - 232, mountain.x + 190, mountain.y)
    quad(mountain.x + 175, mountain.y - 232, mountain.x + 150, mountain.y, mountain.x + 260, mountain.y, mountain.x + 245, mountain.y - 132)
    fill(0)
    triangle(mountain.x, mountain.y, mountain.x + 26, mountain.y - 50, mountain.x + 5, mountain.y)
    triangle(mountain.x + 26, mountain.y - 50, mountain.x + 70, mountain.y - 101, mountain.x + 30, mountain.y - 50)
    fill(210, 150, 95)
    quad(mountain.x, mountain.y, mountain.x + 26, mountain.y - 50, mountain.x + 70, mountain.y - 101, mountain.x + 5, mountain.y)
    quad(mountain.x + 15, mountain.y - 1, mountain.x + 174, mountain.y - 233, mountain.x + 175, mountain.y - 232, mountain.x + 80, mountain.y - 1)
}
// Function to draw trees objects for every element that is in the array.
function drawTrees() {
    for (var i = 0; i < trees.length; i++) {
        var tree = trees[i];
        drawTree(tree);
    }
}

//function to draw a single tree
function drawTree(tree) {

    fill(184, 134, 11)
    rect(tree.x, floorPos_y, tree.width, -tree.width)
    fill(0, 100, 100)
    ellipse(tree.x + 50, floorPos_y - 200, tree.width, -tree.width + 220)
    ellipse(tree.x + 100, floorPos_y - 200, tree.width, -tree.width)
    ellipse(tree.x, floorPos_y - 200, tree.width, -tree.width)
    ellipse(tree.x + 100, floorPos_y - 150, tree.width, -tree.width - 20)
    ellipse(tree.x, floorPos_y - 150, tree.width, -tree.width - 20)
    ellipse(tree.x + 50, floorPos_y - 150, tree.width, -tree.width - 20)
    ellipse(tree.x + 50, floorPos_y - 232, tree.width, -tree.width - 20)


}

// Function to draw canyon objects.
function drawCanyons() {
    for (var i = 0; i < canyons.length; i++) {
        var canyon = canyons[i];
        drawCanyon(canyon);
    }
}

//function to draw a single canyon.
function drawCanyon(canyon) {

    fill(128, 0, 0);
    rect(canyon.x, floorPos_y, canyon.width, height - floorPos_y);
    fill(255, 0, 0);
    rect(canyon.x, floorPos_y + 104, canyon.width, height - floorPos_y);


}


// Function to draw collectable objects for every element in the array of collectables.
function drawCollectables() {
    for (var i = 0; i < collectables.length; i++) {
        var collectable = collectables[i]
        drawCollectable(collectable);
    }
}


// function to draw a single collectable
function drawCollectable(collectable) {
    if (collectable.isfound == false) {
        fill(255, 255, 55);
        stroke(1)
        ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
        stroke(1)
        ellipse(collectable.x_pos, collectable.y_pos, collectable.size - 8, collectable.size - 8);
        fill(218, 165, 32);
        stroke(1)
        textSize(12)
        text("M", collectable.x_pos - 5, collectable.y_pos + 5)
    }
}


//Function to draw Game Score
function drawGold() {
    fill(0);
    textSize(20);
    text("Gold:" + game_score, 20, 20);
}



//Function to draw Flag Pole.
function drawFlagPole() {
    fill(125);
    rect(flagpole.x_pos, floorPos_y - flagpole.height, 30, 400);
    fill(255, 0, 0);
    if (flagpole.isReached == true) {
        rect(flagpole.x_pos, floorPos_y - flagpole.height, 100, 50);
    }
    else {
        rect(flagpole.x_pos, floorPos_y - 50, 100, 50);
    }

}


// function to draw life token
function drawLifeToken() {
    for (var i = 0; i < lives; i++) {
        fill(0);
        textSize(20);
        text("Life:", 825, 30);
        fill(255, 0, 0);
        ellipse(880 + (i * 30), 25, 25, 25);
    }
}


//function to draw game over 
function drawGameOver() {
    fill(0);
    textSize(100);
    text("Game Over", 250, height / 2 - 100);
    textSize(25);
    text("Press Spacebar To Retry", 375, height / 2 + 50)
    textSize(100);
    if (lives > 0) {
        text("You Win!", 300, height / 2)

    } else { text("You Lose!", 300, height / 2) }
}

function createPlatform(x, y, length) {
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function () {
            noStroke();
            fill(0, 155, 0);
            rect(this.x, this.y, this.length, 5);
            fill(139, 69, 19);
            rect(this.x, this.y + 5, this.length, 20);
        },
        checkContact: function (gc_x, gc_y) {
            if (gc_x + 20 > this.x && gc_x < this.x + 20 + this.length) {
                var d = this.y - gc_y;
                if (d >= 0 && d < 1) {
                    return true
                }

            }
            return false;
        }
    }
    return p;
}

/* a fuhnction to draw platforms for the platforms that are in the array of platforms */
function drawPlatforms() {
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
}


//## This function is to draw the enemy by giving it an x,y and range in the startgame(). the range is the amount of distance that the enemy will patrol. I have added lives so that if it was hit by enemy, the enemy would vanish and not deal damage to the gamechar and as the game proceeds, the enemies get stronger.
function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.inc = 1;
    if (this.x > 2000) { this.live = 3 } // give 3 lives to increase difficulty.
    else if (this.x > 1000 && this.x < 2000) { this.live = 2 } // give 2 lives to increase difficulty.
    else { this.live = 1 } // give one live if it is still early in the game.


    //updates the enemy to move by itself.
    this.update = function () {



        this.currentX += this.inc;
        if (this.currentX > this.x + this.range) {
            //set the direction that it is moving towards.
            this.inc = -1
            enemiesisleft = true;
            enemiesisright = false;
        }
        else if (this.currentX < this.x) {
            //set the direction that it is moving towards
            this.inc = 1;
            enemiesisright = true;
            enemiesisleft = false;
        }

        for (i in firemagicleft) {
            var lfm = firemagicleft[i];

            if (dist(lfm.x, lfm.y + 25, this.currentX, this.y) < 20) {
                this.live--
                firemagicleft.splice(i, 1)// destroy fireball when it has reached the enemy and exhaust the live by 1.
            }

        }
        for (i in firemagicright) {
            var rfm = firemagicright[i]
            if (dist(rfm.x, rfm.y + 25, this.currentX, this.y) < 20) {
                this.live--
                firemagicright.splice(i, 1) // destroy fireball when it has reached the enemy and exhaust the live by 1.
            }

        }
    }


    //draw the enemy
    this.draw = function () {
        if (this.live >= 1) {
            this.update();
            if (enemiesisleft == true) {
                noStroke();
                fill(128, 128, 0);
                ellipse(this.currentX, this.y - 60, 30, 15);
                rect(this.currentX - 10, this.y - 55, 15, 10);
                rect(this.currentX - 8, this.y - 45, 10, 10);
                rect(this.currentX - 18.5, this.y - 30, 8, 4);
                rect(this.currentX - 12.5, this.y - 5, 8, 10);
                rect(this.currentX - 2.5, this.y - 5, 8, 10);
                fill(255);

                stroke(51);
                line(this.currentX - 10, this.y - 50, this.currentX + 5, this.y - 50)
                line(this.currentX - 5, this.y - 52.5, this.currentX - 5, this.y - 47.5);
                line(this.currentX - 2.5, this.y - 52.5, this.currentX - 2.5, this.y - 47.5);
                line(this.currentX - 7.5, this.y - 52.5, this.currentX - 7.5, this.y - 47.5);
                line(this.currentX + 2.5, this.y - 52.5, this.currentX + 2.5, this.y - 47.5);
                line(this.currentX, this.y - 52.5, this.currentX, this.y - 47.5);

                rect(this.currentX - 12.5, this.y - 35, 20, 25);
                rect(this.currentX - 12.5, this.y - 10, 10, 5);
                rect(this.currentX - 2.5, this.y - 10, 10, 5);
                rect(this.currentX - 14.5, this.y - 30, 10, 5);

                fill(0);
                ellipse(this.currentX - 5, this.y - 60, 5, 5);
            }
            else if (enemiesisright == true) {
                noStroke();
                fill(128, 128, 0);
                ellipse(this.currentX - 5, this.y - 60, 30, 15);
                rect(this.currentX - 10, this.y - 55, 15, 10);
                rect(this.currentX - 8, this.y - 45, 10, 10);
                rect(this.currentX + 8, this.y - 30, 8, 4);
                rect(this.currentX - 12.5, this.y - 5, 8, 10);
                rect(this.currentX - 2.5, this.y - 5, 8, 10);
                fill(255);
                stroke(51);
                line(this.currentX - 10, this.y - 50, this.currentX + 5, this.y - 50)
                line(this.currentX - 5, this.y - 52.5, this.currentX - 5, this.y - 47.5);
                line(this.currentX - 2.5, this.y - 52.5, this.currentX - 2.5, this.y - 47.5);
                line(this.currentX - 7.5, this.y - 52.5, this.currentX - 7.5, this.y - 47.5);
                line(this.currentX + 2.5, this.y - 52.5, this.currentX + 2.5, this.y - 47.5);
                line(this.currentX, this.y - 52.5, this.currentX, this.y - 47.5);

                rect(this.currentX - 12.5, this.y - 35, 20, 25);
                rect(this.currentX - 12.5, this.y - 10, 10, 5);
                rect(this.currentX - 2.5, this.y - 10, 10, 5);
                rect(this.currentX, this.y - 30, 10, 5);

                fill(0);
                ellipse(this.currentX + 5, this.y - 60, 5, 5);

            }

        }
    }
    this.checkContact = function (gc_x, gc_y) {
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        if (d < 20 && this.live >= 1) {
            return true;
        }
        return false;
    }



}
/* function to draw enemies for the number of elements in the enemies array. */
function drawEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }

}



/* constructor function to add sparks into the canyon. New */
function Spark(x, y) {
    this.x = x;
    this.y = y;
    this.currentX = x;
    this.currentY = y;
    this.inc = random(1, 4);

    // automatically update the direction that it is going. If it is too far away from canyon, it will change direction and head back down to canyon. 
    this.update = function () {
        this.currentY -= this.inc

        if (this.currentY < 500) {
            this.inc = -this.inc
        }

        else if (this.currentY >= 576) {
            this.inc = -this.inc

        }

    }

    this.draw = function () {
        this.update();
        fill(255, 0, 0);
        noStroke();
        ellipse(this.currentX, this.currentY, 5, 5) // draw the sparks.

    }

}

/* draw spark for each element that is in the sparks array.*/
function drawSpark() {
    for (var i = 0; i < Sparks.length; i++) {
        Sparks[i].draw();
    }

}

/* loop the music once it has been loaded.*/
function loaded() {
    BackgroundMusic.loop();
}


/*Function For Preloading Sound*/
function preload() {
    soundFormats('mp3', 'wav');
    jumpSound = loadSound('Assets/cartoon-jump-6462.mp3');
    jumpSound.setVolume(1);
    ZombieBiteSound = loadSound('Assets/zombie.mp3');
    ZombieBiteSound.setVolume(0.125);
    crowdcheerSound = loadSound('Assets/crowdcheer.mp3');
    crowdcheerSound.setVolume(0.005);
    FallintoCanyonSound = loadSound('Assets/fire.mp3');
    FallintoCanyonSound.setVolume(0.3);
    CoinCollectSound = loadSound('Assets/CollectCoin.mp3')
    CoinCollectSound.setVolume(0.4);
    FireMagicSound = loadSound('Assets/fire-magic-6947.mp3')
    FireMagicSound.setVolume(0.5);
    BackgroundMusic = loadSound('Assets/Background4.mp3', loaded);
    BackgroundMusic.setVolume(0.2);
     // play the background music and set it to a volume of 0.2
    BackgroundMusic = loadSound('Assets/Background4.mp3', loaded);
    BackgroundMusic.setVolume(0.2);
}


/*function to inform users of controls */

function drawControls() {

    fill(0, 0, 0, LeftKey)
    triangle(20, 556, 20, 526, 10, 541)
    fill(0, 0, 0, RightKey)
    triangle(40, 556, 40, 526, 50, 541)
    fill(0, 0, 0, Spacebar)
    rect(60, 526, 300, 30)

    fill(0, 0, 0, AttackKey)
    rect(20, 486, 30, 30)
    fill(0)
    textSize(15)
    text("Z", 30, 500)




}







