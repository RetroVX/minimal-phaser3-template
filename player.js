/*!
*
* Simple Player class with cursor key movement
* Allows for easy modification and expansion
* 
*/
export default class Player {
    constructor(scene, x, y) {
      this.scene = scene;
  
      // Add sprite with physics
      this.sprite = scene.physics.add.sprite(x, y, "player");
      // colide sprite with world bounds
      this.sprite.setCollideWorldBounds(true);
      // scale the sprite
      this.sprite.setScale(0.4, 0.4);
      // add bounce to the sprite
      this.sprite.body.setBounce(0.8);


    }
  
  
    update() {
      
      const scene = this.scene;
      const sprite = this.sprite;
  
      // keyboard controls
      // Up
      if (scene.cursors.up.isDown) {
        sprite.setVelocityY(-300);     
      }
      // Down
      else if (scene.cursors.down.isDown) {     
        sprite.setVelocityY(100);
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