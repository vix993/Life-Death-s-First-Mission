class Collect {
  constructor(image, gameWidth, gameHeight, velocity) {
    this.image = image;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.velocity = velocity;
    this.precision = 0.5
    this.x = width;
    this.y = height / 2;
  }
  render() {
    image(
      this.image, this.x, this.y,
      this.gameWidth, this.gameHeight,
    );
  }
  makeFaster(newVelocity) {
    this.velocity += newVelocity;
  }
  initStage1(newVelocity) {
    this.velocity = newVelocity;
  }
  isColliding(hero) {
    /*
    noFill()
    rect(this.x + (this.gameWidth / 3), this.y,
      this.gameWidth * this.precision, this.gameHeight);
    rect(hero.x + (hero.long / 3), hero.y + (hero.tall / 3),
      hero.long * this.precision, hero.tall * this.precision);
      */
    const collision =
      collideRectRect(this.x, this.y,
        this.gameWidth * this.precision,
        this.gameHeight * this.precision,
        hero.x, hero.y,
        hero.long * this.precision,
        hero.tall * this.precision);
    if (collision) {
      this.x = width;
      this.y = height / 2;
    }
    return collision;
  }
  renderTimer() {
      frameRef2++
      console.log('rendertimer' + swordDuration)
      textAlign(RIGHT)
      textSize(30)
      fill('#fff')
      text('Sickle: ' + swordDuration, width - 50, height - 50);
      if (frameRef2 % 30 === 0 && swordDuration >= 0) {
        swordDuration--;
      }
  }
  move() {
    this.x = this.x - this.velocity;
    if (this.x < -width) {
      this.x = width + 40;
    }
  }
}