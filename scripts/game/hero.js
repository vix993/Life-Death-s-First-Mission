 class Hero extends Animation{
  constructor(matrix, image, x, yVariation, long, tall, spriteWidth, spriteHeight){
    super(matrix, image, x, yVariation, long, tall, spriteWidth, spriteHeight)
    this.invincible = false;
  }
   tempInvincibility(time){
     this.invincible = true;
     setTimeout(() => {
       this.invincible = false
     }, time)
   };
   tintBlink(isColliding){
     while(isColliding){
       tint(255, 126);
     }
   }
   heroSlashEffect(){
     maxJumpHero+=2;
     heroAnimations[currentHeroAnimation].jump(-30, maxJumpHero, heroJumpSound);
   }
}