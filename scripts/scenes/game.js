class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    const sceneryFg = new Scenery(imageSceneryForeground, 3.5);
    const sceneryMg = new Scenery(imageSceneryMiddleground, 3);
    const sceneryBg = new Scenery(imageSceneryBackground, 2);
    const scenerySky = new Scenery(imageScenerySky, 0.5);
    sceneryG = new Scenery(imageSceneryGround, 4);
    
    sword = new Collect(imageSword, 35, 109, 3.5);

    sceneries.push(scenerySky);
    sceneries.push(sceneryBg);
    sceneries.push(sceneryMg);
    sceneries.push(sceneryFg);

    points = new Points();
    health = new Points();

    heroRun = new Hero(heroMatrix, imageHero, 0, 15,
      heroGameWidth, heroGameHeight,
      heroImageWidth, heroImageHeight);
    heroJump = new Hero(heroJumpMatrix, imageHeroJump, 0, 15,
      heroGameWidth, heroGameHeight,
      heroImageWidth, heroImageHeight);
    heroSlash = new Hero(heroSlideMatrix, imageHeroSlash, 0, 15,
      heroGameWidth, heroGameHeight,
      heroImageWidth, heroImageHeight);

    heroAnimations.push(heroRun);
    heroAnimations.push(heroJump);
    heroAnimations.push(heroSlash)
    console.log(heroAnimations);

    const enemy = new Enemy(enemyMatrix, imageEnemy1, width - enemyGameWidth, 30,
      enemyGameWidth, enemyGameHeight,
      enemyImageWidth, enemyImageHeight, 12.5, 100);

    const enemy2 = new Enemy(enemy2Matrix, imageEnemy2, width - enemy2GameWidth, 30,
      enemy2GameWidth, enemy2GameHeight,
      enemy2ImageWidth, enemy2ImageHeight, 20, 100);

    const enemyFly = new Enemy(enemyFlyMatrix, imageEnemyFly, width - enemyFlyGameWidth, height / 2,
      enemyFlyGameWidth, enemyFlyGameHeight,
      enemyFlyImageWidth, enemyFlyImageHeight, 17.5, 100);
    enemies.push(enemy);
    enemies.push(enemy2);
    enemies.push(enemyFly);

    // set options to prevent default behaviors for swipe, pinch, etc
    var options = {
      preventDefault: true
    };

    // document.body registers gestures anywhere on the page
    var hammer = new Hammer(document.body, options);
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_ALL
    });

    hammer.on("swipe", swiped);

    gameSound.volume(0.5);
    gameSound.loop();
    heroJumpSound.setVolume(0.2);
    heroSlashSound.setVolume(0.5);
    enemyJumpSound.setVolume(0.5);
    damageSound.setVolume(0.5);
  }

  mousePressed() {
    if (heroAnimations[currentHeroAnimation].isFloored()) {
      maxJumpHero = 2;
    }
    heroAnimations.forEach(heroAnimation => {
      heroAnimation.jump(-30, maxJumpHero, heroJumpSound);
    })
    console.log(maxJumpHero)
    maxJumpHero--;
  }

  keyPressed(keyCode) {
    if (keyCode === 38) {
      if (heroAnimations[currentHeroAnimation].isFloored()) {
        maxJumpHero = 2;
      }
      heroAnimations[currentHeroAnimation].jump(-30, maxJumpHero, heroJumpSound);
      console.log(maxJumpHero)
      maxJumpHero--;
    }
    if (keyCode === 32 && isSwordCollected && !isCoolDown){
      heroSlashSound.play();
      isSlashing = true;
      isCoolDown = true;
      setTimeout(() => {
          isCoolDown = false;
        }, 500)
    }
  }
  swiped(event) {
    console.log(event);
    if (event.direction == 4) {
      msg = "you swiped right";
      console.log(msg);
    } else if (event.direction == 2) {
      msg = "you swiped left";
      console.log(msg);
    } else if (event.direction == 16 && isSwordCollected) {
      heroSlashSound.play();
      isSlashing = true;
      isCoolDown = true;
      setTimeout(() => {
          isCoolDown = false;
        }, 500)
      msg = "swiped down"
      console.log(msg);
    } else if (event.direction == 8) {
      msg = "swiped up"
      console.log(msg);
    }
  }
  draw() {
    if (frameCount < 10) {
      heroAnimations.forEach(heroAnimation => {
        heroAnimation.tempInvincibility(2000);
      });
    }
    if (points.points === 0) {
      sceneries[0].initStage1(0.5);
      sceneries[1].initStage1(2);
      sceneries[2].initStage1(3);
      sceneries[3].initStage1(3.5);
      sceneryG.initStage1(4);
      sword.initStage1(3.5)
    }
    if (points.points / 100 > currentStage) {
      currentStage++;
      minVel += 3;
      maxVel += 3;
      sceneries[0].makeFaster(0.1);
      sceneries[1].makeFaster(0.2);
      sceneries[2].makeFaster(0.5);
      sceneries[3].makeFaster(0.8);
      sceneryG.makeFaster(0.8);
      sword.makeFaster(0.5)
    }
    sceneries.forEach(scenery => {
      scenery.render();
      scenery.move();
    });
    if (!isSwordCollected){
      swordDuration = 15;
      frameRef2 = 0;
      sword.render();
      sword.move();
      if (sword.isColliding(heroAnimations[currentHeroAnimation])){
        isSwordCollected = true;
        equipSwordSound.play();
        setTimeout(() => {
          isSwordCollected = false;
        }, 15000)
        console.log('isSwordColelcted' + isSwordCollected)
      }
    }
    if (isSwordCollected){
      sword.renderTimer();
    }
    if (!sampleIsPlaying) {
      gameSound.loop();
    }

    points.addPoint();
    points.render('#fff', 50, 'Score', height / 15);
    health.render('#00ff00', height - 20, 'HP', height / 20);
    
    if (isSlashing){
      currentHeroAnimation = 2;
    } else if (heroAnimations[currentHeroAnimation].isFloored()) {
      currentHeroAnimation = 0;
    } else {
      currentHeroAnimation = 1;
    }
    
    heroAnimations.forEach(heroAnimation => {
      heroAnimation.y = heroAnimations[currentHeroAnimation].y;
      heroAnimation.jumpVelocity = heroAnimations[currentHeroAnimation].jumpVelocity;
    });
    heroAnimations[currentHeroAnimation].render(isHero)
    heroAnimations[currentHeroAnimation].applyGravity()

    const enemy = enemies[currentEnemy];
    const visibleEnemy = enemy.x < -enemy.long;

    if (visibleEnemy) {
      currentEnemy = generateRandomInteger(0, 2);
      let ranVelocity = generateRandomInteger(minVel, maxVel)
      enemy.velocity = ranVelocity;
    }

    enemy.render(false);
    enemy.applyGravity();
    enemy.move();
    
    if (heroAnimations[currentHeroAnimation].isColliding(enemy)) {
      if (isSlashing){
        heroAnimations[currentHeroAnimation].heroSlashEffect();
      }
      healthPoints -= health.takePoint(enemy.velocity);
      heroAnimations.forEach(heroAnimation => {
        heroAnimation.tempInvincibility(1000);
      });
      if (!isSlashing){
        damageSound.play();
      }
      if (healthPoints < 1) {
        endScore = points.returnPoints();
        healthPoints = 100;
        gameSound.stop();
        sampleIsPlaying = false;
        isSwordCollected = false;
        defeatSound.play();
        minVel = 10;
        maxVel = 30;
        currentScene = 'gameOver';
      }
    }
    sceneryG.render();
    sceneryG.move();
    /* randomize zombie jumps*/
    if (currentEnemy === 0) {
      enemy.randomizeJump(frameRef, enemy, enemyJumpSound)
    }
    /* randomize zombie jumps*/
  }
}
