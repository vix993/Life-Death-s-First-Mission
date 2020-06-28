class Points {
  constructor(){
    this.points = 0;
  }
  
  render(colour, y, string, sizeText) {
    textAlign(RIGHT) 
    fill(colour)
    textSize(sizeText);
    text(string + ': ' + parseInt(this.points), width - 50, y)
  }
  
  renderImage(imageCol){
    image(
      imageCol.image, imageCol.x, imageCol.y,
      imageCol.gameWidth, imageCol.gameHeight,
    );
  }
  
  addPoint(){
    this.points += 0.2;
  }
  takePoint(velocity){
    let pointsTaken = isSlashing ? 0 : velocity;
    console.log('points taken '+ pointsTaken)
    this.points -= pointsTaken;
    return pointsTaken;
  }
  getHP(){
    if(this.points <= 100){
      this.points += 10;
      
      if(this.points > 100){
        this.points = 100;
      }
    }
  }
  initPoints(num){
    this.points = num;
  }
  returnPoints(){
    return this.points;
  }
}