import levelScene from "./scenes/levelScene.js";

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  //backgroundColor: "#192a44",
  parent: "gameCanvas",
  //pixelArt: true,
  resolution: 1.2,
  scene: levelScene,
  physics: {
    default: "arcade",
    arcade: {
      //debug: true,
      gravity: { y: 1000 }
    }
  }
};

const game = new Phaser.Game(config);