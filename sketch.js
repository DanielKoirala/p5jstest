var count = 0;
var grid = [];
const rows = 35; // amount of rows on the canvas (20X20) 
var col = { 
    r: 0,
    g: 0,
    b: 0,
}

function setup() {
  let c = color('hsba(160, 100%, 50%, 0.5)');
  
  
  button = createButton("Pixel Painter");
  button.size(445,60);
  button.position(15,2);
  button.style('background-color', c);
  button.style("font-family", "Courier New");
  button.style("font-weight", "bold");
  button.style("color", "white"); //white
  button.style("font-size", "27px"); //27
  
  btnLog = createButton("Log In");
  btnLog.size(100,40);
  btnLog.position(595,2);
  btnLog.style("border-radius", "20px");
  btnLog.style("border-color", "transparent");
  
  pixel_count();
  music_player();
  multi_player();
  settings();
  
  canvas = createCanvas(445, 445);
  canvas.position(15, 70);
  for (let i = 0; i < rows; i++) {
    grid[i] = [false, false, false, false, false, false, false, false, false, false]
  }
  col.r= random(0,255);
  col.g= random(0,255);  // random colors generate after the "page" is reloaded 
  col.b= random(0,255);
  background(200);
  renderBoard();
}

function pixel_count(){
  let v = color('hsba(160, 100%, 30%, 0.65)');
 
  let string = "3";
  remText = createP(string);
  remText.position(640,50);
  remText.style("font-size", "33px");
  remText.style("color", v);
  remText.style("font-weight", "bold");
  
  remPixels = createP("Pixel Bar");
  remPixels.style("font-size", "13px");
  remPixels.style("font-family", "Courier New"); //black
  remPixels.style("color", "black");
  remPixels.position(613, 107);
  
  usedText = createP(string);
  usedText.position(640,129);
  usedText.style("font-size", "33px");
  usedText.style("color", "grey");
  usedText.style("font-weight", "bold");
  
  usedPixels = createP("Used Pixels");
  usedPixels.style("font-size", "13px");
  usedPixels.style("font-family", "Courier New"); //black
  usedPixels.style("color", "black");
  usedPixels.position(610, 186); //186
}

function music_player(){
  let stringm = "Music Player";
  //ringm.style("font-family", "Courier New"); //black
  music_tab = createButton(stringm);
  music_tab.size(110,40);
  music_tab.position(595,325)
  music_tab.style("border-radius", "20px"); //110
  music_tab.style("border-color", "transparent");
}

function multi_player(){
  multiplayer_tab = createButton("Connect");
  multiplayer_tab.size(110,40);
  multiplayer_tab.position(595,383);
  multiplayer_tab.style("border-radius", "20px");
  multiplayer_tab.style("border-color", "transparent");
}

function settings(){
  set_tab = createButton("Settings");
  set_tab.size(110,40);
  set_tab.position(595,441);
  set_tab.style("border-radius", "20px");
  set_tab.style("border-color", "transparent");
  //t_tab.style("color", "white");
  //t_tab.style("background-color", "yellow"); //blue
}

//which grid box the user painted
function mousePressed() {
  let spotX = floor(mouseX / (width / rows));
  let spotY = floor(mouseY / (width / rows));
  if (count < 12){
    grid[spotX][spotY] = !grid[spotX][spotY];
    count ++; 
  }
  
  renderBoard();
}
 
function renderBoard(){
   for (let x = 0; x < rows; x++) {
    for (let y = 0; y < rows; y++) {
      if(grid[x][y]){ 
       fill(col.r, col.g, col.b);
      } else {fill(255);}
     rect(x*(width / rows),y*(width / rows),width / rows,height / rows)
    }
 }
}

