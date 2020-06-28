class StateButton{
  constructor(text, x, y, scene){
    this.text = text;
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeState());
    this.button.addClass('welcome-screen-button');
  }
  
  draw(){
    this.button.position(this.x, this.y);
  }
  _changeState(){
    this.button.hide();
    currentScene = this.scene;
     
  }
}