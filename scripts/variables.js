function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
function calcSpriteArray(spriteWidth, spriteHeight, totalWidth, spriteCount){
  var spriteArray = [];
  var x = 0;
  var y = 0;
  var currentArray = [];
  for(var i = 0; i < spriteCount; i++)
  {
    if(x >= totalWidth){
      x = 0;
      y = y + spriteHeight;
    }
    
    spriteArray.push([x, y]);
    x = x + spriteWidth;
  }
  return spriteArray;
}

let frameRef = 0;
let frameRef2 = 0;
let health;
let healthPoints = 100;
let hp = 20;
let maxJumpHero = 2;
let maxJumpEnemy = 2;
let currentHeroAnimation = 0;
let currentEnemy = 0;
let currentStage = 1;
let points;
let score = 0;
let sampleIsPlaying = false;
let minVel = 10;
let maxVel = 25;
let endScore;
let gamePaused = false;
let isSlashing;
let isHero = true;
let isSwordCollected = false;
let isCoolDown = false;
let swordDuration = 15;

let msg = "swiped";

let map = [];
let fita;

let imageSceneryGround;
let imageSceneryForeground;
let imageSceneryMiddleground;
let imageSceneryBackground;
let imageScenerySky;
let imageHero;
let imageHeroJump;
let imageHeroBlink;
let imageHeroSlash;
let imageSword;
let imageEnemy1;
let imageEnemy2;
let imageEnemyFly;
let imageGameOver;
let welcomeScreenBG;
let welcomeScreenHero;

let sceneryG;
let heroRun;
let heroJump;
let heroSlash;
let heroSlide;
let sword;
let scenery;
let gameSound;
let jumpSound;
let heroJumpSound;
let heroSlashSound;
let equipSwordSound;
let damageSound;
let defeatSound;
let welcomeSound;
let hero;
let enemy;
let game;
let gameFont;


let currentScene = 'welcomeScreen';
let scenes;
let welcomeScreen;
let stateButton;
let restartButton;
let controls;

let heroGameHeight = 165;
let heroGameWidth = 165;
let heroImageHeight = 900;
let heroImageWidth = 900;

let enemyGameHeight = 149;
let enemyGameWidth = 135;
let enemyImageHeight = 576;
let enemyImageWidth = 521;

let enemy2GameHeight = 162;
let enemy2GameWidth = 135;
let enemy2ImageHeight = 519;
let enemy2ImageWidth = 430;

let enemyFlyGameHeight = 160;
let enemyFlyGameWidth = 160;
let enemyFlyImageHeight = 900;
let enemyFlyImageWidth = 900;
/*
11463 width female zombie 22
521 width
576 height
6020 width male zombie 13
519 height
430 width
*/

const enemyMatrix = calcSpriteArray(
  enemyImageWidth, enemyImageHeight, 11463, 22);

const enemy2Matrix = calcSpriteArray(
  enemy2ImageWidth, enemy2ImageHeight, 6020, 13);

const enemyFlyMatrix = calcSpriteArray(
  enemyFlyImageWidth, enemyFlyImageHeight, 21600, 20);

const heroMatrix = calcSpriteArray(
  heroImageWidth, heroImageHeight, 10800, 12);

const heroJumpMatrix = calcSpriteArray(
  heroImageWidth, heroImageHeight, 16200, 18);

const heroSlideMatrix = calcSpriteArray(
  heroImageWidth, heroImageHeight, 10800, 12);

const heroBlinkingMatrix = calcSpriteArray(
  heroImageWidth, heroImageHeight, 16200, 18);

const heroAnimations = [];

const enemies = [];

const sceneries = [];