function preload(){
  imageSceneryGround = loadImage('imagens/cenario/Ground1.png');
  imageSceneryForeground = loadImage('imagens/cenario/Foreground.png');
  imageSceneryMiddleground = loadImage('imagens/cenario/Middle_Decor.png');
  imageSceneryBackground = loadImage('imagens/cenario/BG_Decor.png');
  imageScenerySky = loadImage('imagens/cenario/Sky.png');

  imageSceneryGround2 = loadImage('imagens/cenario/Ground2.png');
  imageSceneryForeround2 = loadImage('imagens/cenario/Foreground2.png');
  imageSceneryMiddleground2 = loadImage('imagens/cenario/Middle_Decor.png');
  imageSceneryBackground2 = loadImage('imagens/cenario/BG_Decor.png');
  imageScenerySky2 = loadImage('imagens/cenario/Sky2.png');

  imageHero = loadImage('imagens/personagem/reaperManSpriteMap.png');
  imageHeroJump = loadImage('imagens/personagem/reaperManJump.png');
  imageHeroSlide = loadImage('imagens/personagem/slidingreaper.png');
  imageHeroSlash = loadImage('imagens/personagem/reapermanslash.png');
  imageSword = loadImage('imagens/collected/Sword.png')
  
  imageEnemy1 = loadImage('imagens/inimigos/femaleZombieMap.png');
  imageEnemy2 = loadImage('imagens/inimigos/malezombiespritemap.png');
  imageEnemyFly = loadImage('imagens/inimigos/fallenangel.png');
  
  gameSound = createAudio('sounds/funkybeatforgame.mp3');
  enemyJumpSound = loadSound('sounds/jumpeffect.mp3');
  heroJumpSound = loadSound('sounds/herojump.mp3');
  heroSlashSound = loadSound('sons/slashing.mp3');
  damageSound = loadSound('sons/bambo sfx.mp3');
  defeatSound = loadSound('sons/defeat effect.mp3');
  welcomeSound = loadSound('sons/success.mp3');
  equipSwordSound = loadSound('sons/equipitem.mp3')
  
  fita = loadJSON('fita/fita.json')
  
  imageGameOver = loadImage('imagens/assets/game-over.png');
  welcomeScreenBG = loadImage('imagens/cenario/4_game_background.png');
  imageHeroBlink = loadImage('imagens/personagem/reaperblinking.png');
  gameFont = loadFont('imagens/assets/mononoki.ttf')
}
