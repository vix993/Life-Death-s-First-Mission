class WelcomeScreen {
  constructor(){}
  setup(){
    welcomeScreenHero = new Hero(heroBlinkingMatrix, imageHeroBlink, 0, 0, 300, 300,
      heroImageWidth, heroImageHeight);
  }
  draw(){
    this._bgImage();
    this._text();
    this._button();
  }
  _bgImage(){
    image(welcomeScreenBG, 0, 0, width, height);
    welcomeScreenHero.render();
  }
  _text(){
    textAlign(CENTER)
    fill('#fff')
    textFont(gameFont, width / 20);
    text("Life Death's first mission", width / 2, height/3);
    textFont(gameFont, width / 40);
    text("(Mrs. Death's spoiled only child)", width /2, height/2)
  }
  _button(){
    stateButton.draw();
    health.initPoints(100);
    points.initPoints(0);
  }
}