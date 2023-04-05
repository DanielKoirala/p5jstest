class Floor {
  constructor() {
    this.size = 20;
    this.x = width;
    this.y = height- this.size;
  }
  
  move(){
    this.x -= 4;
  }
  
  show(){
    rect(this.x, this.y, this.size, this.size);
  }
}
