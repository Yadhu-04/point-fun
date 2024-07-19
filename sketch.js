function setup() {
  createCanvas(700,480);
background(255, 230, 102);
}
  function mouseDragged(){
    let posX = mouseX;
    let posY = mouseY
 strokeWeight(5);
 stroke('black');
 point(posX,posY);
}

function jump() {
  console.log('Jumpy!!!!');
}