/*

*/




//jumping left 
function drawJumpingLeft() {

    stroke(0)
    fill(0, 0, 256)
    rect(gameChar_x - 8, gameChar_y - 45, 15, 30) //body

    rect(gameChar_x, gameChar_y - 15, 7, 15) // leg 2 
    noStroke()
    quad(gameChar_x - 7, gameChar_y - 14, gameChar_x - 14, gameChar_y - 10, gameChar_x - 7, gameChar_y - 10, gameChar_x, gameChar_y - 14)
    rect(gameChar_x - 14, gameChar_y - 10, 7, 6)
    stroke(0)
    line(gameChar_x - 7, gameChar_y - 15, gameChar_x - 14, gameChar_y - 10)
    line(gameChar_x - 14, gameChar_y - 10, gameChar_x - 14, gameChar_y - 4)
    line(gameChar_x - 14, gameChar_y - 4, gameChar_x - 7, gameChar_y - 4)
    line(gameChar_x - 7, gameChar_y - 4, gameChar_x - 7, gameChar_y - 11)
    line(gameChar_x - 7, gameChar_y - 11, gameChar_x, gameChar_y - 15)
    // leg 1
    fill(255, 245, 238)

    rect(gameChar_x, gameChar_y, 7, 3)
    rect(gameChar_x - 14, gameChar_y - 4, 7, 3)


    fill(255, 245, 238)
    stroke(0)
    ellipse(gameChar_x, gameChar_y - 55, 25, 25)
    noStroke()
    fill(0); // brows

    stroke(255)
    arc(gameChar_x - 5, gameChar_y - 60, 5, 5, PI, TWO_PI); // brows

    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 57, 5, 8); // eye/

    fill(0);
    stroke(0);
    ellipse(gameChar_x - 5, gameChar_y - 55, 3, 5);


    noFill();
    stroke(0);
    strokeWeight(1);
    line(gameChar_x - 7, gameChar_y - 47, gameChar_x - 5, gameChar_y - 47)//smile 
    line(gameChar_x - 7, gameChar_y - 47, gameChar_x - 7, gameChar_y - 48)
    line(gameChar_x - 5, gameChar_y - 47, gameChar_x - 5, gameChar_y - 48)

    fill(0, 0, 256)
    rect(gameChar_x, gameChar_y - 50, 5, 10)
    fill(255, 245, 238)
    rect(gameChar_x, gameChar_y - 55, 5, 5)

}


//function to draw gamechar jumping right
function drawJumpingRight() {

    stroke(0)
    fill(0, 0, 256)
    rect(gameChar_x - 8, gameChar_y - 45, 15, 30) //body
    rect(gameChar_x - 6.5, gameChar_y - 50, 5, 10)
    rect(gameChar_x - 8, gameChar_y - 15, 7, 15) // leg 2 
    noStroke()
    quad(gameChar_x, gameChar_y - 14, gameChar_x + 7, gameChar_y - 10, gameChar_x + 14, gameChar_y - 10, gameChar_x + 7.5, gameChar_y - 14)
    rect(gameChar_x + 7, gameChar_y - 10, 7, 6)
    stroke(0)
    line(gameChar_x, gameChar_y - 14, gameChar_x + 7, gameChar_y - 10)
    line(gameChar_x + 7, gameChar_y - 10, gameChar_x + 7, gameChar_y - 4)
    line(gameChar_x + 7, gameChar_y - 4, gameChar_x + 14, gameChar_y - 4)
    line(gameChar_x + 14, gameChar_y - 4, gameChar_x + 14, gameChar_y - 10)
    line(gameChar_x + 14, gameChar_y - 10, gameChar_x + 7, gameChar_y - 15)// leg 1
    fill(255, 245, 238)

    rect(gameChar_x + 7, gameChar_y - 4, 7, 3)
    rect(gameChar_x - 8, gameChar_y, 7, 3)


    fill(255, 245, 238)
    stroke(0)
    ellipse(gameChar_x, gameChar_y - 55, 25, 25)
    noStroke()
    fill(0); // brows

    stroke(255)
    arc(gameChar_x + 5, gameChar_y - 60, 5, 5, PI, TWO_PI); // brows

    fill(255);
    ellipse(gameChar_x + 5, gameChar_y - 57, 5, 8); // eye/

    fill(0);
    stroke(0);
    ellipse(gameChar_x + 5, gameChar_y - 55, 3, 5);


    noFill();
    stroke(0);
    strokeWeight(1);
    line(gameChar_x + 7, gameChar_y - 47, gameChar_x + 5, gameChar_y - 47)//smile 
    line(gameChar_x + 7, gameChar_y - 47, gameChar_x + 7, gameChar_y - 48)
    line(gameChar_x + 5, gameChar_y - 47, gameChar_x + 5, gameChar_y - 48)

    fill(0, 0, 256)
    rect(gameChar_x - 6.5, gameChar_y - 50, 5, 10)
    fill(255, 245, 238)
    rect(gameChar_x - 6.5, gameChar_y - 55, 5, 5)

}



//function to draw game char walking left
function drawWalkingLeft() {

    stroke(0)
    fill(0, 0, 256)
    rect(gameChar_x - 8, gameChar_y - 45, 15, 30) //body
    rect(gameChar_x, gameChar_y - 40, 5, 10)
    rect(gameChar_x, gameChar_y - 15, 7, 15) // leg 2 
    quad(gameChar_x - 7.5, gameChar_y - 14, gameChar_x - 13, gameChar_y, gameChar_x - 6, gameChar_y, gameChar_x - 0.5, gameChar_y - 14) // leg 1
    fill(255, 245, 238)
    rect(gameChar_x - 13.8, gameChar_y, 7, 3)
    rect(gameChar_x, gameChar_y, 7, 3)

    rect(gameChar_x, gameChar_y - 30, 5, 5)

    fill(255, 245, 238)
    stroke(0)
    ellipse(gameChar_x, gameChar_y - 55, 25, 25)
    noStroke()
    fill(0);
    stroke(255)// brows
    arc(gameChar_x - 5, gameChar_y - 60, 5, 5, PI, TWO_PI); // brows
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 57, 5, 8); // eye/
    fill(0);
    stroke(0);
    ellipse(gameChar_x - 5, gameChar_y - 55, 3, 5);
    noFill();
    stroke(0);
    strokeWeight(1);
    line(gameChar_x - 7, gameChar_y - 47, gameChar_x - 5, gameChar_y - 47)//smile 
    line(gameChar_x - 7, gameChar_y - 47, gameChar_x - 7, gameChar_y - 48)
    line(gameChar_x - 5, gameChar_y - 47, gameChar_x - 5, gameChar_y - 48)


}


// function to draw game char walking right
function drawWalkingRight() {

    stroke(0)
    fill(0, 0, 256)
    rect(gameChar_x - 8, gameChar_y - 45, 15, 30) //body
    rect(gameChar_x - 6.5, gameChar_y - 40, 5, 10)
    rect(gameChar_x - 8, gameChar_y - 15, 7, 15) // leg 2 
    quad(gameChar_x + 7.5, gameChar_y - 14, gameChar_x + 13, gameChar_y, gameChar_x + 6, gameChar_y, gameChar_x + 0.5, gameChar_y - 14) // leg 1
    fill(255, 245, 238)

    rect(gameChar_x + 5.88, gameChar_y, 7, 3)
    rect(gameChar_x - 8, gameChar_y, 7, 3)
    rect(gameChar_x - 6.5, gameChar_y - 30, 5, 5)

    fill(255, 245, 238)
    stroke(0)
    ellipse(gameChar_x, gameChar_y - 55, 25, 25)
    noStroke()
    fill(0); // brows

    stroke(255)
    arc(gameChar_x + 5, gameChar_y - 60, 5, 5, PI, TWO_PI); // brows

    fill(255);
    ellipse(gameChar_x + 5, gameChar_y - 57, 5, 8); // eye/

    fill(0);
    stroke(0);
    ellipse(gameChar_x + 5, gameChar_y - 55, 3, 5);


    noFill();
    stroke(0);
    strokeWeight(1);
    line(gameChar_x + 7, gameChar_y - 47, gameChar_x + 5, gameChar_y - 47)//smile 
    line(gameChar_x + 7, gameChar_y - 47, gameChar_x + 7, gameChar_y - 48)
    line(gameChar_x + 5, gameChar_y - 47, gameChar_x + 5, gameChar_y - 48)

}



//function to draw game char jumping forwards
function drawJumpingFacingForwards() {


    stroke(0);
    fill(0, 0, 255);//body
    rect(gameChar_x - 15, gameChar_y - 45, 30, 30);



    fill(0, 0, 255);
    rect(gameChar_x - 15, gameChar_y - 15, 15, 15);
    rect(gameChar_x, gameChar_y - 15, 15, 10); // legs



    rect(gameChar_x - 25, gameChar_y - 55, 10, 20); //sleeves
    rect(gameChar_x + 15, gameChar_y - 45, 10, 20);


    fill(255, 245, 238);
    rect(gameChar_x + 15, gameChar_y - 30, 10, 10); // hands
    rect(gameChar_x - 25, gameChar_y - 65, 10, 10);
    rect(gameChar_x - 15, gameChar_y, 15, 5); // legs 
    rect(gameChar_x, gameChar_y - 5, 15, 5);
    textSize(6);

    fill(255, 245, 238);//head
    ellipse(gameChar_x, gameChar_y - 55, 30, 30);
    //face
    stroke(255);
    fill(0);
    arc(gameChar_x - 5, gameChar_y - 58, 5, 5, PI, TWO_PI);
    arc(gameChar_x + 5, gameChar_y - 58, 5, 5, PI, TWO_PI);
    fill(255);
    ellipse(gameChar_x + 5, gameChar_y - 55, 5, 8);
    ellipse(gameChar_x - 5, gameChar_y - 55, 5, 8)
    fill(0);
    stroke(0);
    ellipse(gameChar_x + 5, gameChar_y - 53, 3, 5);
    ellipse(gameChar_x - 5, gameChar_y - 53, 3, 5);
    stroke(0);
    ellipse(gameChar_x + 5, gameChar_y - 53, 3, 5);
    ellipse(gameChar_x - 5, gameChar_y - 53, 3, 5);
    noFill();
    strokeWeight(1);
    arc(gameChar_x, gameChar_y - 45, 6, 3, TWO_PI, PI);


    fill(255, 255, 255);
    text("SWAGCS", gameChar_x - 14, gameChar_y - 30);
}



//function to draw gamechar standing front facing.
function drawStandingFrontFacing() {

    stroke(0);
    fill(0, 0, 255);//body
    rect(gameChar_x - 15, gameChar_y - 45, 30, 30);



    fill(0, 0, 255);
    rect(gameChar_x - 15, gameChar_y - 15, 15, 15);
    rect(gameChar_x, gameChar_y - 15, 15, 15); // legs



    rect(gameChar_x - 25, gameChar_y - 45, 10, 20); //sleeves
    rect(gameChar_x + 15, gameChar_y - 45, 10, 20);


    fill(255, 245, 238);
    rect(gameChar_x + 15, gameChar_y - 30, 10, 10); // hands
    rect(gameChar_x - 25, gameChar_y - 30, 10, 10);
    rect(gameChar_x - 15, gameChar_y, 15, 5);
    rect(gameChar_x, gameChar_y, 15, 5);
    textSize(6);

    fill(255, 245, 238);//head
    ellipse(gameChar_x, gameChar_y - 55, 30, 30);
    //face
    stroke(255);
    fill(0);
    arc(gameChar_x - 5, gameChar_y - 58, 5, 5, PI, TWO_PI);
    arc(gameChar_x + 5, gameChar_y - 58, 5, 5, PI, TWO_PI);
    fill(255);
    ellipse(gameChar_x + 5, gameChar_y - 55, 5, 8);
    ellipse(gameChar_x - 5, gameChar_y - 55, 5, 8)
    fill(0);
    stroke(0);
    ellipse(gameChar_x + 5, gameChar_y - 53, 3, 5);
    ellipse(gameChar_x - 5, gameChar_y - 53, 3, 5);
    stroke(0);
    ellipse(gameChar_x + 5, gameChar_y - 53, 3, 5);
    ellipse(gameChar_x - 5, gameChar_y - 53, 3, 5);
    noFill();
    strokeWeight(1);
    arc(gameChar_x, gameChar_y - 45, 6, 3, TWO_PI, PI);

    fill(255, 255, 255);

    text("SWAGCS", gameChar_x - 14, gameChar_y - 30);
}



