var cards = require('./cards.js');

class Game {
  constructor() {
    this.level = 1;
    this.life = 20;
    this.hazards = cards.hazards;
    this.yage = cards.age_young;
    this.oage = cards.age_old;
    let arr = cards.pirates;
    this.goals = [
      arr.splice(Math.floor(Math.random() * arr.length), 1),
      arr.splice(Math.floor(Math.random() * arr.length), 1),
    ];
    this.abilities = cards.start;
  }

  age() {
    if (this.yage.length > 0) {
      return 'young';
    } else {
      return 'old';
    }
  }
}

module.exports = Game;
