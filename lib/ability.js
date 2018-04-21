const createCard = require('./createCard.js');

export const activateAbility = e => {
  console.log(e.path[e.path.length - 13].dataset.positions);
  console.log(e.target.dataset.value);
  console.log(e.target.textContent);
  const game = $('#game').data('game');
  const modal = document.createElement('div');
  modal.id = 'modal';
  if (e.target.dataset.value === 'destroy') {
  } else if (e.target.dataset.value === 'copy') {
  } else if (e.target.dataset.value === 'below pile') {
  } else if (e.target.dataset.value === 'step') {
    const temp = game.activeHazard;
    if (game.level === 2) {
      temp.hazard.yellow = temp.hazard.green;
    } else if (
      game.level === 3 &&
      game.activeHazard.hazard.yellow !== game.activeHazard.hazard.red
    ) {
      temp.hazard.red = temp.hazard.yellow;
    } else {
      temp.hazard.red = temp.hazard.yellow;
    }
    game.activeHazard = temp;
  } else if (e.target.dataset.value === 'exchange') {
  } else if (e.target.dataset.value === 'double') {
    const title = document.createElement('div');
    title.textContent = `Select a card to double fighting strength`;
    modal.innerHTML += title.outerHTML;
    const cards = document.createElement('div');
    cards.id = 'power-active-div';
    let card = null;
    game.activeAbilities.forEach(ability => {
      card = createCard.createAbility(ability, game.level);
      card.dataset.card = ability;
      cards.innerHTML += card.outerHTML;
    });
    modal.innerHTML += cards.outerHTML;
    const confirm = document.createElement('div');
    confirm.id = 'confirm-btn';
    confirm.textContent = 'confirm';
    modal.innerHTML += confirm.outerHTML;
  } else if (e.target.dataset.value === 'sort') {
  }
};
