class GameOver {
  constructor(){}
  setup(){
    console.log(heroBlinkingMatrix)
    welcomeScreenHero = new Hero(
      heroBlinkingMatrix, imageHeroBlink, 0, 0, 300, 300,
      heroImageWidth, heroImageHeight);
  }
  draw(){
    this._bgImage();
    this._text();
    this._button();
  }
  _bgImage(){
    image(imageSceneryBackground, 0, 0, width, height);
    image(imageScenerySky, 0, 0, width, height);
    welcomeScreenHero.render();
  }
  _text(){
     textAlign(CENTER)
    fill('#fff')
    textFont(gameFont, width / 30);
    text('Vixe... minha mae nao vai gostar nada disso...', width / 2, height/3);
    textFont(gameFont, width / 35);
    text('Total Score: ' + Math.floor(endScore), width / 2, height - (height / 2))
  }
  _button(){
    console.log('restarting button')
    restartButton.button.show();
    restartButton.draw();
    frameCount -= frameCount
    health.initPoints(100);
    points.initPoints(0);
    currentStage = 0;
    minVel = 10;
    maxVel = 25;
  }
}