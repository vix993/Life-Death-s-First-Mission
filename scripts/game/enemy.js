class Enemy extends Animation {
  constructor(matrix, image, x, yVariation, long, tall, spriteWidth, spriteHeight, velocity, delay) {
    super(matrix, image, x, yVariation, long, tall, spriteWidth, spriteHeight)

    this.velocity = velocity;
    this.delay = delay;
    this.x = width + this.delay;
  }
  randomizeJump(frameRef, enemy, sound) {
    if (frameRef === Math.floor(Math.random() * 70) && maxJumpEnemy > 0) {
      enemy.jump(-25, maxJumpEnemy, sound);
      frameRef -= frameRef;
      maxJumpEnemy--;
    }
    if (frameRef > 29) {
      frameRef -= 30;
    }
    if (enemy.isFloored()){
      maxJumpEnemy = 2;
    }
  }

  move() {
    this.x = this.x - this.velocity;

    if (this.x < -this.long - this.delay) {
      this.x = width + 10;
    }
  }
}