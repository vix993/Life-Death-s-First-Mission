function setup() {
  //createCanvas(windowWidth, windowHeight);
  const canvasElt = createCanvas(400, 600).elt;
  canvasElt.style.width = '100%', cavasElt.style.height = '100%'
  frameRate(30);
  game = new Game();
  controls = new Controls();
  welcomeScreen = new WelcomeScreen();
  gameOver = new GameOver();
  stateButton = new StateButton(
    "If I fail, mother's gonna be fuming...",
    width /3, height - height / 3, 'controls');
  restartButton = new StateButton(
    "I can't return home without completing my mission!", width /4, height - height / 3, 'game');
  game.setup();
  welcomeScreen.setup();
  gameOver.setup();
  gameSound.loop();
  scenes = {
    welcomeScreen,
    controls,
    game,
    gameOver
  };
}
function mousePressed(){
  if (currentScene == 'game'){
    game.mousePressed();
  }
}
function keyPressed(){
  game.keyPressed(keyCode);
  if (currentScene == 'game'){
    game.keyPressed(keyCode);
  }
  if (currentScene == 'controls'){
    controls.keyPressed(keyCode);
  }
  return false;
}
function swiped(event){
  game.swiped(event);
  controls.swiped(event);
}

function draw() {
  scenes[currentScene].draw();
}
