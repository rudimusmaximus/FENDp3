/**
 * @description ES6 style class for enemies our player must avoid
 * with constructor placeholder
 * for properties and methods for update() and render()
 */
class Enemy {
  constructor(x, y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }
  /**
   * @description Player class method that updates the
   * enemy's position, required method for game
   * //TODO: proper jsdoc Parameter: dt, a time delta between ticks
   */
  update(dt) {
    console.log('updating enemy…');
    //TODO: updates
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  }
  /**
   * @description Player class method that draws the enemy
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
  constructor(x, y) {
    this.sprite = 'images/char-pink-girl.png';
    this.x = x;
    this.y = y;
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
    //TODO: updates
    let nextX, nextY = 0;
    switch (keyupMovementString) {
      case 'left':
        nextX = -1;
        break;
      case 'up':
        nextY = 1;
        break;
      case 'right':
        nextX = 1;
        break;
      case 'down':
        nextY = -1;
        break;
      default:
        break;
    } //end switch
    //add the + or - movement to the player object property coordinate
    this.x += nextX;
    this.y += nextY;
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
var player = new Player(5, 6);
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
