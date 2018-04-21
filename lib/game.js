var cards = require('./cards.js');

class Game {
  constructor() {
    this.level = 1;
    this.life = 20;
    this.hazards = this.shuffle(cards.hazards);
    this.activeHazard = null;
    this.spentHazards = [];
    this.markDelete = [];
    this.yage = this.shuffle(cards.age_young);
    this.oage = this.shuffle(cards.age_old);
    let arr = cards.pirates;
    this.goals = [
      arr.splice(Math.floor(Math.random() * arr.length), 1),
      arr.splice(Math.floor(Math.random() * arr.length), 1),
    ];
    this.abilities = this.shuffle(cards.start);
    this.activeAbilities = [];
    this.holdAbilities = [];
    this.spentAbilities = [];
    this.cardsToDelete = 0;
    this.powers = [];
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
    if (this.hazards.length > 1) {
      arr.push(this.hazards.pop());
      arr.push(this.hazards.pop());
      return [arr[0], arr[1]];
    } else {
      console.log(this.hazards);
      this.hazards = this.shuffle(this.hazards.concat(this.spentHazards));
      console.log(this.hazards);
      this.level += 1;
      arr.push(this.hazards.pop());
      arr.push(this.hazards.pop());
      console.log(arr);
      return [arr[0], arr[1]];
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
    if (this.abilities.length === 0) {
      this.abilities = this.spentAbilities;
      if (this.yage.length > 0) {
        this.abilities.push(this.yage.pop());
      } else {
        this.abilities.push(this.oage.pop());
      }
      this.abilities = this.shuffle(this.abilities);
    }
    const draw = this.abilities.pop();
    this.activeAbilities.push(draw);
    return draw;
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
    let test = false;
    arr.forEach(el => {
      if (el !== hazard && test) {
        arr.push(hazard);
      } else {
        this.activeAbilities.push(hazard);
        test = true;
      }
    });
    this.markDelete = arr;
  }

  delete() {
    this.spentAbilities = this.spentAbilities.concat(this.activeAbilities);
    this.markDelete = [];
    this.activeAbilities = [];
    this.powers = [];
    this.stop = '';
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}

module.exports = Game;
