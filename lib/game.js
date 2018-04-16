var cards = require('./cards.js');

class Game {
  constructor() {
    this.level = 1;
    this.life = 20;
    this.hazards = cards.hazards;
    this.spent_hazards = [];
    this.yage = cards.age_young;
    this.oage = cards.age_old;
    let arr = cards.pirates;
    this.goals = [
      arr.splice(Math.floor(Math.random() * arr.length), 1),
      arr.splice(Math.floor(Math.random() * arr.length), 1),
    ];
    this.abilities = cards.start;
    this.spent_abilities = [];
  }

  age() {
    if (this.yage.length > 0) {
      return 'young';
    } else {
      return 'old';
    }
  }

  drawHazards() {
    if (this.hazards.length > 2) {
      this.spent_hazards.push(
        this.hazards.splice(
          Math.floor(Math.random() * this.hazards.length),
          1
        )[0]
      );
      this.spent_hazards.push(
        this.hazards.splice(
          Math.floor(Math.random() * this.hazards.length),
          1
        )[0]
      );
      return [
        this.spent_hazards[this.spent_hazards.length - 2],
        this.spent_hazards[this.spent_hazards.length - 1],
      ];
    }
  }
}

module.exports = Game;
