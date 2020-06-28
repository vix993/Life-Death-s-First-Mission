class Scenery {
  constructor(image, velocity){
    this.image = image;
    this.velocity = velocity;
    this.x1 = 0;
    this.x2 = width;
  }
  render(){
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
  }
  makeFaster(newVelocity){
    this.velocity += newVelocity;
  }
  initStage1(newVelocity){
    this.velocity = newVelocity;
  }
  move() {
    this.x1 = this.x1 - this.velocity;
    this.x2 = this.x2 - this.velocity;
    if (this.x1 < -width){
      this.x1 = width + this.x2;
    }
    if (this.x2 < -width){
      this.x2 = width + this.x1;
    }
  }
}