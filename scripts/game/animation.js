class Animation {
  constructor(matrix, image, x, yVariation, tall, long, spriteWidth, spriteHeight) {
    /* variables pertinent to animation */
    this.matrix = matrix;
    this.image = image;
    this.x = x;
    this.yVariation = yVariation;
    this.long = long;
    this.tall = tall;
    this.y = height - this.tall;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    /* variables pertinent to animation */

    /* variables pertinent to physics */
    this.floor = height - this.tall - this.yVariation;
    this.y = this.floor;
    this.jumpVelocity = 0;
    this.gravity = 3;
    this.precision = 0.4;
    /* variables pertinent to physics */

    this.currentFrame = 0;
  }

  render(isHero) {
    image(
      this.image, this.x, this.y,
      this.long, this.tall,
      this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1],
      this.spriteWidth, this.spriteHeight
    );

    this.animate(isHero);
  }

  jump(jumpForce, maxJump, sfx) {
    if (maxJump > 0) {
      this.jumpVelocity = jumpForce;
      if (sfx) {
        sfx.play();
      }
      //console.log('jump executed')
    }
  }

  applyGravity() {
    this.y = this.y + this.jumpVelocity;
    this.jumpVelocity = this.jumpVelocity + this.gravity;

    if (this.y > this.floor) {
      this.y = this.floor;
    }
  }
  isFloored() {
    return this.y === this.floor;
  }
  slide() {
    this.precision = 0.2;
  }

  isColliding(enemy) {
    /*
    noFill()
    rect(this.x + (this.long / 3), this.y + (this.tall /3),
         this.long * this.precision, this.tall * this.precision);
    rect(enemy.x + (enemy.long / 3), enemy.y + (enemy.tall / 3),
         enemy.long * this.precision, enemy.tall * this.precision);
    */
    if(this.invincible){
      return false;
    }
    const collision =
      collideRectRect(this.x, this.y,
        this.long * this.precision,
        this.tall * this.precision,
        enemy.x, enemy.y,
        enemy.long * this.precision,
        enemy.tall * this.precision);
    return collision;
  }

  animate(isHero) {
    this.currentFrame++;
    if (this.currentFrame > this.matrix.length - 1) {
      if (isSlashing && isHero){
        isSlashing = false;
        console.log('animate function isSlashing' + isSlashing)
      }
      this.currentFrame = 0;
    }
  }
}