const createCard = require('./createCard.js');

export const activateAbility = e => {
  // console.log(e.path[e.path.length - 13].dataset.positions);
  // console.log(e.target.dataset.value);
  // console.log(e.target.textContent);
  // document.querySelector('#game').dataset.selected = [];
  // document.querySelector('#game').dataset.select_num = e.target.textContent;

  const game = $('#game').data('game');
  if (e.target.dataset.value === 'destroy') {
    setupModalAll(`Select a card to remove from the game`, e, game);
  } else if (e.target.dataset.value === 'copy') {
  } else if (e.target.dataset.value === 'below pile') {
    setupModalAll(`Select a card to move to bottom of abilities pile`, e, game);
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
    if (e.target.textContent === '1') {
      setupModalAll(
        `Select a card to discard and exchange for another`,
        e,
        game
      );
    } else {
      setupModalAll(`Select up to 2 cards to discard and exchange`, e, game);
    }
  } else if (e.target.dataset.value === 'double') {
    setupModalAll(`Select a card to double fighting strength`, e, game);
  } else if (e.target.dataset.value === 'sort') {
  }
  document.querySelector('#confirm-btn').style.cursor = 'pointer';
  document.querySelector('#confirm-btn').addEventListener('click', e => {
    confirm(e);
  });
  const holder = e.path[e.path.length - 13].querySelectorAll('#power-box-gem');
  if (holder.length > 1) {
    for (let i = e.target.dataset.pos; i < holder.length; i++) {
      if (i === holder.length - 1) {
        holder[i].textContent = '';
        holder[i].id = 'power-box';
      } else {
        holder[i].outerHTML = holder[i + 1].outerHTML;
        holder[i].dataset.value = holder[i + 1].dataset.value;
        holder[i].dataset.pos = holder[i + 1].dataset.pos - 1;
      }
    }
  } else {
    const divEl = document.querySelector('#' + e.path[e.path.length - 13].id);
    divEl.parentNode.removeChild(divEl);
  }
};

const setupModalAll = (text, e, game) => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  const title = document.createElement('h4');
  title.textContent = text;
  modal.innerHTML += title.outerHTML;
  const cards = document.createElement('div');
  cards.id = 'card-selection';
  let card = null;
  $('#game').data('active', game.returnActiveAbilities());
  $('#game').data('selected', []);
  $('#game').data('total', e.target.textContent);
  $('#game').data('type', e.target.dataset.value);
  game.activeAbilities.forEach((ability, i) => {
    card = createCard.createAbility(ability, game.level);
    card.dataset.place = i;
    cards.innerHTML += card.outerHTML;
  });
  modal.innerHTML += cards.outerHTML;
  const confirm = document.createElement('div');
  confirm.id = 'confirm-btn';
  confirm.textContent = 'confirm';
  modal.innerHTML += confirm.outerHTML;
  document.querySelector('#game').innerHTML += modal.outerHTML;

  document
    .querySelector('#card-selection')
    .querySelectorAll('.card')
    .forEach(card => {
      card.addEventListener('click', e => {
        selector(e);
      });
    });
};

const selector = e => {
  const game = $('#game').data('game');
  const position = e.path[e.path.length - 11].dataset.place;

  let test = true;
  $('#game')
    .data('selected')
    .forEach((el, i) => {
      if (el === $('#game').data('active')[position] && test) {
        test = false;
        $('#game')
          .data('selected')
          .splice(i, 1);
        e.path[e.path.length - 11].style.border = '2px solid transparent';
        $('#game').data('total', $('#game').data('total') + 1);
      }
    });
  if (test && $('#game').data('total') > 0) {
    $('#game')
      .data('selected')
      .push($('#game').data('active')[position]);
    e.path[e.path.length - 11].style.border = '2px solid blue';
    $('#game').data('total', $('#game').data('total') - 1);
  }
  // console.log($('#card-selection > .card'));
};

const confirm = e => {
  const game = $('#game').data('game');
  if ($('#game').data('type') === 'double') {
    $('#game')
      .data('selected')
      .forEach(ability => {
        game.playerFght += ability.ability.fight;
      });
    $('#total-fight').text(`Total Fight: ${game.playerFght}`);
  } else if ($('#game').data('type') === 'destroy') {
  }
  const modal = document.querySelector('#modal');
  modal.parentNode.removeChild(modal);
  console.log($('#game').data('selected'));
  console.log($('#game').data('type'));
  console.log(e);
};
