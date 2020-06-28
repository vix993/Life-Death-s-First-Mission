class Controls {
  constructor(){}
  setup(){
    welcomeScreenHero = new Hero(heroBlinkingMatrix, imageHeroBlink, 0, 0, 300, 300,
      heroImageWidth, heroImageHeight);
  }
  keyPressed(keyCode){
    if (keyCode === 13) {
      currentScene = 'game';
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
    } else if (event.direction == 16) {
      msg = "swiped down"
      console.log(msg);
    } else if (event.direction == 8) {
      currentScene = 'game';
      msg = "swiped up"
      console.log(msg);
    }
  }
  draw(){
    this._bgImage();
    this._text();
  }
  _bgImage(){
    image(welcomeScreenBG, 0, 0, width, height);
    welcomeScreenHero.render();
  }
  _text(){
    textAlign(CENTER)
    fill('#fff')
    textFont(gameFont, width / 50);
    text('PC: Up Arrow or left-click to jump\nSpace to attack once weapon is equipped', width / 2, height/3);
    text('Mobile: Tap to jump\nSwipe down to attack once weapon is equipped', width /2, height/2);
    textFont(gameFont, width / 40);
    text('Press Enter or Swipe Up to play!', width /2, height - height/4);
  }
  _button(){
    stateButton.draw();
    health.initPoints(100);
    points.initPoints(0);
  }
}