var cards = require('./cards.js');

class Game {
  constructor() {
    this.level = 1;
    this.life = 20;
    this.hazards = cards.hazards;
    this.activeHazard = null;
    this.spentHazards = [];
    this.markDelete = [];
    this.yage = cards.age_young;
    this.oage = cards.age_old;
    let arr = cards.pirates;
    this.goals = [
      arr.splice(Math.floor(Math.random() * arr.length), 1),
      arr.splice(Math.floor(Math.random() * arr.length), 1),
    ];
    this.abilities = cards.start;
    this.activeAbilities = [];
    this.holdAbilities = [];
    this.spentAbilities = [];
    this.cardsToDelete = 0;
    this.pile = [];
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
    if (this.hazards.length > 0) {
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
    } else {
      this.hazards = this.spentHazards;
      this.level += 1;
    }
  }

  returnHazard(hazard) {
    this.spentHazards.push(hazard);
  }

  addToTop(abilities) {
    abilities.concat(this.pile);
  }
  addToBottom(abilities) {
    this.pile.concat(abilities);
  }

  drawAbility() {
    if (this.pile.length > 0) {
      const draw = this.pile.slice(0, 1)[0];
      this.activeAbilities.push(draw);
      return draw;
    } else {
      if (this.abilities.length === 0) {
        this.abilities = this.spentAbilities;
        if (this.yage.length > 0) {
          this.abilities.push(
            this.yage.splice(Math.floor(Math.random() * this.yage.length), 1)[0]
          );
        } else {
          this.abilities.push(
            this.oage.splice(Math.floor(Math.random() * this.oage.length), 1)[0]
          );
        }
      }
      const draw = this.abilities.splice(
        Math.floor(Math.random() * this.abilities.length),
        1
      )[0];
      this.activeAbilities.push(draw);
      return draw;
    }
  }

  changeLife(num) {
    this.life += num;
  }

  setHazard(hazard) {
    this.activeHazard = hazard;
  }

  setHold() {
    this.holdAbilities = this.activeAbilities;
  }

  markForDelete(hazard) {
    let test = true;
    this.activeAbilities.forEach((el, i) => {
      if (el === hazard && test) {
        this.markDelete.push(this.activeAbilities.splice(i, 1)[0]);
        test = false;
      }
    });
  }

  unmarkForDelete(hazard) {
    const arr = [];
    let test = true;
    arr.forEach(el => {
      if (el !== hazard && test === false) {
        arr.push(hazard);
      } else {
        this.activeAbilities.push(hazard);
        test = false;
      }
    });
    this.markDelete = arr;
  }

  delete() {
    this.spentAbilities = this.spentAbilities.concat(this.activeAbilities);
    this.markDelete = [];
    this.activeAbilities = [];
  }
}

module.exports = Game;
