var cards = require('./cards.js');

class Game {
  constructor() {
    this.level = 1;
    this.life = 20;
    this.hazards = cards.hazards;
    this.activeHazard = null;
    this.spentHazards = [];
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
    let arr = [];
    if (this.hazards.length > 2) {
      arr.push(
        this.hazards.splice(
          Math.floor(Math.random() * this.hazards.length),
          1
        )[0]
      );
      arr.push(
        this.hazards.splice(
          Math.floor(Math.random() * this.hazards.length),
          1
        )[0]
      );
      return [arr[0], arr[1]];
    }
  }

  returnHazard(hazard) {
    this.spentHazards.push(hazard);
  }

  addAbility(ability) {
    this.abilities.push(ability);
  }

  drawAbility(num) {
    return this.abilities.splice(0, num);
  }

  changeLife(num) {
    this.life += num;
  }

  setHazard(hazard) {
    this.activeHazard = hazard;
  }

  seeHazard() {
    return this.activeHazard;
  }
}

module.exports = Game;
