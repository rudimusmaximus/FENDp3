/**
 * @description ES6 style class for enemies our player must avoid
 * with constructor placeholder
 * for properties and methods for update() and render()
 */
class Enemy {
  constructor(startColumn, bugRow, speed) {// Variables applied to each of our instances go here,
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.xMovement = 101;//distance between blocks horizontally
    this.yMovement = 83;//distance between blocks vertically
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.x = 0+((startColumn-1)*this.xMovement);
    //half height plus offset puts in row 2 (1st of 3 stone)
    //account for desired starting row
    this.yMargin = (41.5+20);
    this.y =  this.yMargin+((bugRow-1)*this.yMovement);
  }
/**
   * @description Enemy class method that updates the
   * enemy's position, required method for game
   * //TODO: proper jsdoc Parameter: dt, a time delta between ticks
   */
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // if not passed the boundary edge
    if(this.x < this.xMovement * 5){
      // advance forward - is incremented by speed * dt
      this.x += this.speed * dt;
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
    this.yMargin = (41.5+20);
    this.startY = this.yMargin+(this.yMovement * 4);
    this.x = this.startX;
    this.y = this.startY;
    this.winState = false;
    this.winImageName = 'images/winner.gif';
  }
  /**
   * @description Player class method that
   * updates the player position
   */
  update() {
    if (this.hasCollided()){
      this.reset();
    } else {
      if(this.isVictorious()){
        this.winState = true;
        this.showWinModal();
      }
    }
  }
  /**
   * @description Player class method that
   * checks collisions. When same x and y as any enemy
   * @returns {boolean} true if 'has collided'false otherwise
   */
  hasCollided() {
    for(let enemy of allEnemies){
      if (this.y === enemy.y){
        if(this.x < enemy.x + enemy.xMovement/2 &&
          enemy.x < this.x + this.xMovement/2){
          return true;
        }
      }
    }
    return false;
  }
  /**
   * @description Player class method that
   * checks win state if in water, returns true
   * @returns {boolean} true if in win state, false otherwise
   */
  isVictorious() {
    if (this.y === -21.5) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * @description Player class method that
   * draws player sprite on current x and y
   * coordinate position
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  /**
   * @description Player class method that receives
   * a keyup movement string from the event addEventListener
   * executes required movement if valid
   * @param {string} keyupMovementString left, up, right or down
   */
  handleInput(keyupMovementString) {
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
    this.x = this.startX;
    this.y = this.startY;
  }
  /**
   * @description Player class method that
   * shows the win modal
   */
  showWinModal() {
    const modal = new Modal(document.querySelector('.modal-overlay'));
    window.openModal = modal.open.bind(modal);
    window.openModal();
  }
} //end class Player

class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector('.button-close')
    closeButton.addEventListener('click', this.close.bind(this));
    overlay.addEventListener('click', e => {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });
  }
  open() {
    this.overlay.classList.remove('is-hidden');
  }

  close() {
    this.overlay.classList.add('is-hidden');
  }
}

/*
 * Now instantiate your objects. Array for allEnemies
 * object for player
 */
var allEnemies = [new Enemy(0,1,300),
                  new Enemy(-3,2,350),
                  new Enemy(0,2,350),
                  new Enemy(-1,3,425)];
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
