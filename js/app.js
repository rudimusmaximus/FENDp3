/**
 * @description ES6 style class for enemies our player must avoid
 * with constructor placeholder
 * for properties and methods for update() and render()
 */
class Enemy {
  constructor() {// Variables applied to each of our instances go here,
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.xMovement = 101;//distance between blocks horizontally
    this.yMovement = 83;//distance between blocks vertically
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y =  (2+this.yMovement) - 25;
  }
/**
   * @description Enemy class method that updates the
   * enemy's position, required method for game
   * //TODO: proper jsdoc Parameter: dt, a time delta between ticks
   */
  update(dt) {
    console.log('updating enemy…');
    //TODO: updates
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // if not passed the boundary edge
    if(this.x < this.xMovement * 5){
      // advance forward - is incremented by speed * dt
      this.x += 200 * dt;
    } else {
      //else reset to starting position
      this.x = - this.xMovement;
    }
  }
  /**
   * @description Enemy class method that draws the enemy
   * on the screen, required method for game
   */
  render() {
    console.log('enemy render…');
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
} //end class Enemy

/**
 * @description ES6 style class for player with constructor placeholder
 * for properties and methods for update(), render() and
 * a handleInput()
 */
class Player {
  constructor() {
    this.sprite = 'images/char-pink-girl.png';
    this.xMovement = 101;//distance between blocks horizontally
    this.yMovement = 83;//distance between blocks vertically
    this.startX = this.xMovement * 2;
    this.startY = (this.yMovement * 5) - 20;
    this.x = this.startX;
    this.y = this.startY;
    this.collideState = false;
    this.winState = false;
  }
  /**
   * @description Player class method that
   * updates the player position
   */
  update(dt) { //TODO: call does not pass dt, why wouldn't we need if enemy does?
    console.log('updating player…');
    //TODO: same as enemy updates?
  }
  /**
   * @description Player class method that
   * checks collisions. When same x and y as any enemy
   * @returns {boolean} true if 'has collided'false otherwise
   */
  hasCollided() {
    console.log('collision check…');
    return false; //TODO: updates
  }
  /**
   * @description Player class method that
   * checks win state if at top row, returns true
   * @returns {boolean} true if in win state, false otherwise
   */
  isVictorious() {
    console.log('win state check…');
    if (this.y === 0) {
      console.log('you won'); //open win modal
      return true;
    } else {
      return false;
    } //TODO: updates
  }
  /**
   * @description Player class method that
   * draws player sprite on current x and y
   * coordinate position
   */
  render() {
    console.log('player render…');
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  /**
   * @description Player class method that receives
   * a keyup movement string from the event addEventListener
   * executes required movement if valid
   * @param {string} keyupMovementString left, up, right or down
   */
  handleInput(keyupMovementString) {
    console.log('arrow key input handled…');
    //add the + or - movement to the player object property coordinate
    switch (keyupMovementString) {
      case 'left':
        if (this.x > 0){
          this.x -= this.xMovement;
        }
        break;
      case 'up':
        if (this.y >0){
          this.y -= this.yMovement;
        }
        //TODO: decide if making it into water is win vs making it to the water
      // //handle for adjustment and water row
      //   if (this.y > this.yMovement){
      //     this.y -= this.yMovement;
      //   }
        break;
      case 'right':
        if (this.x < this.xMovement * 4){
          this.x += this.xMovement;
        }
        break;
      case 'down':
        if(this.y < this.yMovement * 4){
          this.y += this.yMovement;
        }
        break;
      default:
        break;
    } //end switch
  } //end handleInput
  /**
   * @description Player class method that
   * updates the player position back to the starting point
   */
  reset() {
    console.log('updating player…');
    //TODO:what are the starting coord also for instantiating
  }
} //end class Player

/*
 * Now instantiate your objects. Array for allEnemies
 * object for player
 */
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();
/*
 * This listens for key presses and sends the keys to your
 * Player.handleInput() method. You don't need to modify this.
 */
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
