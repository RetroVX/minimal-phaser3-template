import preloadScene from "./scenes/preloadScene.js";
import levelScene from "./scenes/levelScene.js";

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'gameCanvas',
        width: 800,
        height: 600
    },
    backgroundColor: '#2d2d2d',
    scene: [preloadScene, levelScene],
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true
        }
    }
};

var game = new Phaser.Game(config);
