/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Arial");
}

function draw() {
  background(200);
  textSize(16);
  text("mess around", 340, height/2);
  if(mouseIsPressed){
    fill(200);
    strokeWeight(0);
    rect(340, 100, 100, 50); //cover first text
    textSize(52); //start code for new text
    textFont("Georgia");
    fill(250, 0, 0)
    text("and find out", 260, 130);
    textFont("Ariel") //put first text back to og
    fill(0)
    //coded in honor of my friend who had somehow never heard the phrase until last week
  }

}
