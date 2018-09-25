/**
 * @description ES6 style class for enemies our player must avoid
 * with constructor placeholder
 * for properties and methods for update() and render()
 */
class Enemy {
  constructor() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

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
    //TODO: udpates
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
  constructor() {
    //this.numPlayers = numPlayers; //TODO: example property
  }
  /**
   * @description Player class method that //TODO:
   */
  update() {
    console.log('updating player…');
    //TODO: udpates
  }
  /**
   * @description Player class method that //TODO:
   */
  render() {
    console.log('player render…');
    //TODO: udpates
  }
  /**
   * @description Player class method that //TODO:
   */
  handleInput() {
    console.log('arrow key input handled…');
    //TODO: udpates
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
