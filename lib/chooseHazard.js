const createCard = require('./createCard.js');

export const chooseHazard = (hazards, game) => {
  const gameNode = document.querySelector('#main-game');
  const selectionDiv = document.createElement('div');
  selectionDiv.id = 'selection-div';
  const confirmDiv = document.createElement('div');
  confirmDiv.id = 'confirm-div';
  const confirmBtn = document.createElement('div');
  confirmBtn.id = 'confirm-btn';
  confirmBtn.textContent = 'Confirm Selection';
  confirmDiv.innerHTML += confirmBtn.outerHTML;

  let switcher = document.createElement('img');
  let checkbox = document.createElement('input');
  switcher.src = './assets/images/switch.png';
  checkbox.setAttribute('type', 'checkbox');
  makeCard(checkbox, switcher, 1, selectionDiv, game, hazards[0]);
  makeCard(checkbox, switcher, 2, selectionDiv, game, hazards[1]);

  gameNode.innerHTML = selectionDiv.outerHTML;
  gameNode.innerHTML += confirmDiv.outerHTML;
  setEvents(hazards, game);
};

const makeCard = (checkbox, switcher, num, node, game, hazard) => {
  let card = document.createElement('div');
  let cardBody = createCard.createHazard(hazard, game.level);
  let aside = document.createElement('aside');

  card.className = 'card-holder';
  card.id = `hazard-side-${num}`;
  aside.id = `card${num}-aside`;

  switcher.id = `switch-${num}`;
  checkbox.id = `checkbox-${num}`;
  aside.innerHTML += switcher.outerHTML;
  aside.innerHTML += checkbox.outerHTML;
  card.innerHTML += aside.outerHTML;
  card.innerHTML += cardBody.outerHTML;
  node.innerHTML += card.outerHTML;
};

const setEvents = (hazards, game) => {
  $(`#switch-1`).data('card', hazards[0]);
  $(`#switch-1`).data('level', game.level);
  $(`#switch-2`).data('card', hazards[1]);
  $(`#switch-2`).data('level', game.level);
  document.querySelector(`#switch-1`).addEventListener('click', e => {
    flipCard(e);
  });
  document.querySelector(`#checkbox-1`).addEventListener('click', e => {
    selectCard(e);
  });
  document.querySelector(`#switch-2`).addEventListener('click', e => {
    flipCard(e);
  });
  document.querySelector(`#checkbox-2`).addEventListener('click', e => {
    selectCard(e);
  });
};
const flipCard = e => {
  const check = document.querySelector(
    `#checkbox-${e.path[0].id.split('-')[1]}`
  ).checked;

  let newCard = null;
  const hazard = $(`#switch-${e.path[0].id.split('-')[1]}`).data('card');
  const level = $(`#switch-${e.path[0].id.split('-')[1]}`).data('level');
  console.log(hazard);
  let card_node =
    document.querySelector(`#hazard-side-${e.path[0].id.split('-')[1]}`) ||
    document.querySelector(`#ability-side-${e.path[0].id.split('-')[1]}`);
  $(`#hazard-side-${e.path[0].id.split('-')[1]} div`).remove();
  $(`#ability-side-${e.path[0].id.split('-')[1]} div`).remove();
  if (card_node.id.split('-')[0] === 'hazard') {
    newCard = createCard.createAbility(hazard, level);
    card_node.id = `ability-side-${e.path[0].id.split('-')[1]}`;
  } else {
    newCard = createCard.createHazard(hazard, level);
    card_node.id = `hazard-side-${e.path[0].id.split('-')[1]}`;
  }
  card_node.innerHTML += newCard.outerHTML;
  const switchx = document.querySelector(
    `#switch-${e.path[0].id.split('-')[1]}`
  );
  $(`#switch-${e.path[0].id.split('-')[1]}`).data('card', hazard);
  $(`#switch-${e.path[0].id.split('-')[1]}`).data('level', level);
  if (check === true) {
    document.querySelector(
      `#checkbox-${e.path[0].id.split('-')[1]}`
    ).checked = true;
  }
  document
    .querySelector(`#switch-${e.path[0].id.split('-')[1]}`)
    .addEventListener('click', e => {
      flipCard(e);
    });
  document
    .querySelector(`#checkbox-${e.path[0].id.split('-')[1]}`)
    .addEventListener('click', e => {
      selectCard(e);
    });
};

const selectCard = e => {
  if (e.target.checked == true) {
    let box = 1;
    if (e.target.id.split('-')[1] == 1) {
      box = 2;
    }
    $(`#game`).data('selected', e.target.id.split('-')[1]);
    $(`#confirm-btn`).css('color', 'black');
    $(`#confirm-btn`).css('cursor', 'pointer');
    $(`#checkbox-${box}`).prop('checked', false);
    $(`#checkbox-${e.target.id.split('-')[1]}`).prop('checked', true);
    $(`#confirm-div`).off();
    $(`#confirm-div`).on('click', 'div', e => {
      chooseCard(e);
    });
  } else {
    $(`#game`).data('selected', false);
    $(`#confirm-btn`).css('color', '#4c4c4c');
    $(`#confirm-btn`).css('cursor', 'not-allowed');
    $(`#confirm-div`).off();
  }
};

const chooseCard = e => {
  let other = 1;
  if ($(`#game`).data('selected') == 1) {
    other = 2;
  }
  const game = $(`#game`).data('game');
  game.returnHazard($(`#switch-${other}`).data('card'));
  game.setHazard($(`#switch-${$('#game').data('selected')}`).data('card'));
};
