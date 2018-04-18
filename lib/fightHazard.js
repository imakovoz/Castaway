const createCard = require('./createCard.js');
const chooseHazard = require('./chooseHazard.js');

export const fightHazard = (hazard, game) => {
  const gameNode = document.querySelector('#main-game');
  const fightDiv = document.createElement('div');
  fightDiv.id = 'fight-div';
  const drawDiv = document.createElement('div');
  drawDiv.id = 'draw-div';
  const hazardDiv = document.createElement('div');
  hazardDiv.id = 'hazard-div';
  const pushDiv = document.createElement('div');
  pushDiv.id = 'push-div';

  const hazardCard = createCard.createHazard(hazard, game.level);
  hazardDiv.innerHTML += hazardCard.outerHTML;

  const fightDisp = document.createElement('div');
  fightDisp.id = 'fight-disp';
  const totalFight = document.createElement('div');
  totalFight.id = 'total-fight';
  totalFight.textContent = 'Total Fight: 0';
  const resolve = document.createElement('div');
  resolve.textContent = 'Resolve Fight';
  resolve.id = 'resolve-fight';
  fightDisp.innerHTML += totalFight.outerHTML;
  fightDisp.innerHTML += resolve.outerHTML;
  hazardDiv.innerHTML += fightDisp.outerHTML;

  $('#game').data('playerFght', 0);
  $('#game').data('drawCnt', hazard.hazard.draw);

  if (game.level === 1) {
    $('#game').data('drawFght', hazard.hazard.green);
  } else if (game.level === 2) {
    $('#game').data('drawFght', hazard.hazard.yellow);
  } else {
    $('#game').data('drawFght', hazard.hazard.red);
  }

  fightDiv.innerHTML += drawDiv.outerHTML;
  fightDiv.innerHTML += hazardDiv.outerHTML;
  fightDiv.innerHTML += pushDiv.outerHTML;
  gameNode.innerHTML = fightDiv.outerHTML;
  setEvents(game);
};

const setEvents = game => {
  document.querySelector(`#abilities`).addEventListener('click', e => {
    drawCard(e);
  });
  document.querySelector(`#resolve-fight`).addEventListener('click', e => {
    $('#game').data('active', game.activeAbilities.slice(0));
    resolveFight(e);
  });
  $('#abilities').hover(
    function() {
      $(this).css('border', '2px solid blue');
    },
    function() {
      $(this).css('border', 'none');
    }
  );
};

const drawCard = e => {
  const game = $('#game').data('game');
  let targetDiv = document.querySelector('#draw-div');
  if ($('#game').data('drawCnt') <= 0) {
    game.changeLife(-1);
    const life = document.querySelector('#life');
    life.textContent = `Life: ${game.life}`;
    targetDiv = document.querySelector('#push-div');
  }
  const newCard = document.createElement('div');
  const draw = game.drawAbility();
  newCard.innerHTML = createCard.createAbility(draw).outerHTML;
  $('#game').data(
    'playerFght',
    $('#game').data('playerFght') + draw.ability.fight
  );
  $('#total-fight').text(`Total Fight: ${$('#game').data('playerFght')}`);
  newCard.style.margin = '-45px 0';
  targetDiv.innerHTML += newCard.outerHTML;
  $('#game').data('drawCnt', $('#game').data('drawCnt') - 1);
};

const resolveFight = e => {
  const game = $('#game').data('game');
  var old_element = document.getElementById('abilities');
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  if (
    $('#game').data('playerFght') < $('#game').data('drawFght') &&
    game.activeAbilities.length > 0
  ) {
    game.changeLife(
      $('#game').data('playerFght') - $('#game').data('drawFght')
    );
    let num_cards = $('#game').data('drawFght') - $('#game').data('playerFght');
    if (game.activeAbilities.length < num_cards) {
      num_cards = game.activeAbilities.length;
    }
    game.cardsToDelete = num_cards;
    $('#life').text(`Life: ${game.life}`);
    const gameDiv = document.querySelector('#game');
    const modal = createModal(game);
    gameDiv.innerHTML += modal.outerHTML;
    document.querySelectorAll('.card-delete').forEach(el => {
      el.addEventListener('click', e => {
        const key = e.path[e.path.length - 10].getAttribute('key');
        const selected = e.path[e.path.length - 10].getAttribute('selected');
        const game = $('#game').data('game');
        if (selected === 'true') {
          game.cardsToDelete += 1;
          e.path[e.path.length - 10].setAttribute('selected', 'false');
          e.path[e.path.length - 10].style.border = '2px solid transparent';
          game.unmarkForDelete($('#game').data('active')[key]);
        } else if (selected === 'false' && game.cardsToDelete > 0) {
          game.cardsToDelete -= 1;
          e.path[e.path.length - 10].setAttribute('selected', 'true');
          e.path[e.path.length - 10].style.border = '2px solid blue';
          game.markForDelete($('#game').data('active')[key]);
        }
        if (game.cardsToDelete == 0) {
          document
            .querySelector('#modal-confirm')
            .addEventListener('click', e => {
              const game = $('#game').data('game');
              const hazards = game.drawHazards();
              game.delete();
              const modal = document.querySelector('#modal');
              modal.parentNode.removeChild(modal);
              chooseHazard.chooseHazard(hazards, game);
            });
          document.querySelector('#modal-confirm').style.color = 'black';
          document.querySelector('#modal-confirm').style.cursor = 'pointer';
        } else {
          var old_element = document.getElementById('modal-confirm');
          var new_element = old_element.cloneNode(true);
          old_element.parentNode.replaceChild(new_element, old_element);
          document.getElementById('modal-confirm').style.color = '#4c4c4c';
          document.getElementById('modal-confirm').style.cursor = 'not-allowed';
        }
      });
    });
    document.querySelector('#modal-confirm').addEventListener('click', e => {
      const game = $('#game').data('game');
      const hazards = game.drawHazards();
      game.delete();
      const modal = document.querySelector('#modal');
      modal.parentNode.removeChild(modal);
      chooseHazard.chooseHazard(hazards, game);
    });
  } else {
    const hazards = game.drawHazards();
    game.delete();
    chooseHazard.chooseHazard(hazards, game);
  }
};

const createModal = game => {
  const modal = document.createElement('div');
  modal.id = 'modal';

  const title = document.createElement('h4');
  let dfight = $('#game').data('drawFght');
  let pfight = $('#game').data('playerFght');
  let num_cards = dfight - pfight;
  if (game.activeAbilities.length < num_cards) {
    num_cards = game.activeAbilities.length;
  }
  title.textContent = `Please select ${num_cards} cards to remove`;
  modal.innerHTML += title.outerHTML;

  const cards = document.createElement('div');
  cards.id = 'card-selection';
  let newCard = null;
  game.activeAbilities.forEach((el, i) => {
    newCard = createCard.createAbility(el, game.level);
    newCard.className = 'card-delete';
    newCard.setAttribute('key', i);
    newCard.setAttribute('selected', 'false');
    cards.innerHTML += newCard.outerHTML;
  });
  modal.innerHTML += cards.outerHTML;

  const confirm = document.createElement('div');
  confirm.id = 'modal-confirm';
  confirm.textContent = 'Confirm Selection';
  modal.innerHTML += confirm.outerHTML;

  return modal;
};
