let cubething;
let runningfloor = [];
function setup() {
  createCanvas(500, 300);
  cubething = new CubeThing();
}

function mouseClicked() {
  cubething.dodge();
}

function draw() {
  
  if (random(1) < 0.007) {
    runningfloor.push(new Floor());
  }
  background(220);
  cubething.show();
  cubething.move();
  

  
  for (let f of runningfloor) {
    f.move();
    f.show();
    if (cubething.hits(f)){
    console.log('youve been hit!');
    noLoop();
  }
  }
}
