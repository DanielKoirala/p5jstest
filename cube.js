class CubeThing {
  constructor() {
    this.size = 30;
    this.x = this.size;
    this.y = height - this.size;
    this.z =0;
    this.gravity = 0.6;
  }
  
  dodge() {
    if (this.y == height - this.size) {
      this.z = -11;
    }
  }
  
  hits(f) {
    if ((f.x >= this.x) && (f.x <= (this.x + this.size)) && ((this.y+this.size) >= (height - f.height))){
      return true;
    } else {
      return false;
    }
  }
  
  move(){
    this.y += this.z;
    this.z += this.gravity;
    this.y = constrain(this.y, 0, height -this.size);
  }
  
  show() {
    rect(this.x, this.y , this.size, this.size)
  }
}
