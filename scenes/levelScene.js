import Player from "./../player.js";

/**
 * Main scene where everything comes together
 */
export default class levelScene extends Phaser.Scene {
    constructor() {
        super({key: 'levelScene'});
    }

    create() {

        // get the main camera so we can manipulate it if needed
        this.camera = this.cameras.main;

        // create cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // set player x & y
        const playerX = this.camera.width / 2;
        const playerY = this.camera.height /2;

        // create new player by importing the Player class
        this.player = new Player(this, playerX, playerY);
        
        // uncomment if you want the camera to follow the player
        //this.camera.startFollow(this.player.sprite);

        // create moving ball for player to collide with
        this.ball = this.physics.add.sprite(100, 300, 'ball').setOrigin(0.5, 0.5);
        // scale the ball
        this.ball.setScale(0.4, 0.4);
        // collide the ball with the world
        this.ball.setCollideWorldBounds(true);
        // add bounce to the ball
        this.ball.body.setBounce(1);
        // disallow the gravity so it can move freely
        this.ball.body.setAllowGravity(false);
        // set velocity on ball to get it moving
        this.ball.body.setVelocity(200, 400);

        // text example
        // score
        this.score = 0;
        this.scoreText = this.add.text(this.camera.width / 2, 24, '0', {
            font: '36px Ariel',
            fill: '#FFFFFF'
        });
        this.scoreText.setOrigin(0.5, 0.5);

        // collide player and the ball with arcade physics
        // when the player and ball collide, run the spriteCollision function
        this.physics.add.collider(this.player, this.ball, this.spriteCollision, null, this);


    }


    // collision function passing in the player and ball
    spriteCollision(player, ball) {
        // flash the camera when the player and ball collide
        this.camera.flash();
        // update score and score text when colliding
        this.score += 1;
        this.scoreText.setText(this.score);
    }
}