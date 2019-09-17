/*!
 *
 * Simple Player class with cursor key movement
 * Allows for easy modification and expansion
 * 
 */
export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {

        super(scene, x, y);

        this.scene = scene;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Add sprite with physics
        this.setTexture('player');
        // colide sprite with world bounds
        this.setCollideWorldBounds(true);
        // scale the sprite
        this.setScale(0.4, 0.4);
        // add bounce to the sprite
        this.body.setBounce(0.8);


    }


    preUpdate() {

        const scene = this.scene;
        const sprite = this;

        // keyboard controls
        // Up
        if (scene.cursors.up.isDown) {
            sprite.setVelocityY(-250);
        }
        // Down
        else if (scene.cursors.down.isDown) {
            sprite.setVelocityY(250);
        }
        else {
            sprite.setVelocityY(0);
        }
        // Left
        if (scene.cursors.left.isDown) {
            sprite.setVelocityX(-250);
            sprite.flipX = true;
        }
        // Right
        else if (scene.cursors.right.isDown) {
            sprite.setVelocityX(250);
            sprite.flipX = false;
        }
        // else no key press
        else {
            sprite.setVelocityX(0);

        }


    }

}