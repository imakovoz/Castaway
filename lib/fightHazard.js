const createCard = require('./createCard.js');
const chooseHazard = require('./chooseHazard.js');
const ability = require('./ability.js');
const endGame = require('./endGame.js');

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

  const powers = document.createElement('div');
  powers.id = 'powers-disp';
  hazardDiv.innerHTML += powers.outerHTML;

  const fightDisp = document.createElement('div');
  fightDisp.id = 'fight-disp';

  const totalFight = document.createElement('div');
  totalFight.id = 'total-fight';
  totalFight.textContent = `Total Fight: 0`;
  const drawCnt = document.createElement('div');
  drawCnt.id = 'draw-cnt';
  drawCnt.textContent = `Free draws: ${hazard.hazard.draw}`;
  const resolve = document.createElement('div');
  resolve.textContent = 'Resolve Fight';
  resolve.id = 'resolve-fight';
  fightDisp.innerHTML += totalFight.outerHTML;
  fightDisp.innerHTML += drawCnt.outerHTML;
  fightDisp.innerHTML += resolve.outerHTML;
  hazardDiv.innerHTML += fightDisp.outerHTML;

  game.playerFght = 0;
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
      $(this).css('border', '2px solid #4a82db');
    },
    function() {
      $(this).css('border', 'none');
    }
  );
};

export const drawCard = e => {
  const game = $('#game').data('game');
  if (
    game.stop !== 'stop' &&
    (game.abilities.length > 0 || game.spentAbilities.length > 0)
  ) {
    let targetDiv = document.querySelector('#draw-div');
    const life = document.querySelector('#life');
    if ($('#game').data('drawCnt') <= 0) {
      game.changeLife(-1);
      life.textContent = `Life: ${game.life}`;
      targetDiv = document.querySelector('#push-div');
    }
    if (game.life < 1) {
      endGame.lose();
    } else {
      const newCard = document.createElement('div');
      const draw = game.drawAbility();
      game.playerFght += draw.ability.fight;
      document.querySelector('#abilities').textContent = game.abilities.length;
      if (draw.ability.spec.type === 'life') {
        game.changeLife(draw.ability.spec.value);
        life.textContent = `Life: ${game.life}`;
      } else if (draw.ability.spec.type === 'card') {
        $('#game').data(
          'drawCnt',
          $('#game').data('drawCnt') + draw.ability.spec.value
        );
      } else if (draw.ability.spec.type === 'stop') {
        if ($('#game').data('drawCnt') > 0) {
          $('#game').data('drawCnt', 1);
        } else {
          game.stop = 'stop';
        }
      }
      if (game.life < 1) {
        endGame.lose();
      } else if (
        draw.ability.spec !== false &&
        draw.ability.spec.type !== 'draw' &&
        draw.ability.spec.type !== 'life'
      ) {
        game.powers.push(draw);
        const power_disp = document.querySelector('#powers-disp');
        const powers = document.querySelectorAll('#powers-disp > *');
        let test = false;
        if (powers !== null) {
          powers.forEach((power, i) => {
            if (power.dataset.type === draw.ability.spec.type) {
              test = i + 1;
            }
          });
        }
        if (test == false) {
          const power = document.createElement('div');
          power.id = draw.ability.spec.type + '-power';
          power.dataset.type = draw.ability.spec.type;
          power.dataset.positions = 1;
          const title = document.createElement('div');
          title.id = 'power-title';
          title.textContent = draw.ability.spec.type;
          power.innerHTML += title.outerHTML;
          const box = document.createElement('div');
          const gemBox = document.createElement('div');
          gemBox.id = 'power-box-gem';
          gemBox.dataset.value = draw.ability.spec.type;
          gemBox.dataset.pos = 1;
          gemBox.textContent = draw.ability.spec.value;
          power.innerHTML += gemBox.outerHTML;
          box.id = 'power-box';
          box.textContent = '';
          power.innerHTML += box.outerHTML;
          power.innerHTML += box.outerHTML;
          power_disp.innerHTML += power.outerHTML;

          document.querySelectorAll('#power-box-gem').forEach(box => {
            box.addEventListener('click', e => {
              ability.activateAbility(e);
            });
          });
        } else {
          const power = document.querySelector(
            '#' + draw.ability.spec.type + '-power'
          );
          power.dataset.positions += 1;
          const key = power.dataset.positions;
          const box = power.querySelector('#power-box');
          box.id = 'power-box-gem';
          box.dataset.value = draw.ability.spec.type;
          box.dataset.pos = key;
          box.textContent = draw.ability.spec.value;

          document
            .querySelector(`#${draw.ability.spec.type + '-power'}`)
            .querySelectorAll('#power-box-gem')
            [key - 1].addEventListener('click', e => {
              ability.activateAbility(e);
            });
        }
      }
      if (game.life > 1) {
        newCard.innerHTML = createCard.createAbility(draw).outerHTML;
        $('#total-fight').text(`Total Fight: ${game.playerFght}`);
        newCard.style.margin = '-75px 0';
        targetDiv.innerHTML += newCard.outerHTML;
        $('#game').data('drawCnt', $('#game').data('drawCnt') - 1);
        if ($('#game').data('drawCnt') > 0) {
          $('#draw-cnt').text(`Free draws: ${$('#game').data('drawCnt')}`);
        } else {
          $('#draw-cnt').text('Free draws: 0');
        }
      }
    }
  } else {
    document.querySelector('#abilities').style.cursor = 'not-allowed';
  }
};

export const resolveFight = e => {
  const game = $('#game').data('game');
  var old_element = document.getElementById('abilities');
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  let playerFght = game.playerFght;
  if (game.end) {
    if (playerFght < $('#game').data('drawFght')) {
      endGame.lose();
    } else if (game.goals.length === 2) {
      game.goals = [game.goals[1]];
      endGame.resolveEnd(game);
    } else {
      endGame.win();
    }
  } else if (
    playerFght < $('#game').data('drawFght') &&
    game.activeAbilities.length > 0
  ) {
    let num_cards = $('#game').data('drawFght') - playerFght;
    game.changeLife(-1 * num_cards);
    if (game.life < 1) {
      endGame.lose();
    } else {
      game.cardsToDelete = num_cards;
      $('#life').text(`Life: ${game.life}`);
      const gameDiv = document.querySelector('#game');
      const modal = createModal(game);
      gameDiv.innerHTML += modal.outerHTML;
      document.querySelectorAll('.card-delete #card-header').forEach(el => {
        el.style.width = '163px';
        el.style.marginTop = '2px';
      });
      document.querySelectorAll('.card-delete').forEach(el => {
        el.addEventListener('click', e => {
          const key = e.path[e.path.length - 11].getAttribute('key');
          const selected = e.path[e.path.length - 11].getAttribute('selected');
          const game = $('#game').data('game');
          if (selected === 'true') {
            game.cardsToDelete += $('#game').data('active')[key].ability.cost;
            e.path[e.path.length - 11].setAttribute('selected', 'false');
            e.path[e.path.length - 11].style.border =
              '2px solid rgb(0, 0, 0, 0.1)';
            game.unmarkForDelete($('#game').data('active')[key]);
          } else if (
            selected === 'false' &&
            game.cardsToDelete - $('#game').data('active')[key].ability.cost >=
              0
          ) {
            game.cardsToDelete -= $('#game').data('active')[key].ability.cost;
            e.path[e.path.length - 11].setAttribute('selected', 'true');
            e.path[e.path.length - 11].style.border = '2px solid #4a82db';
            game.markForDelete($('#game').data('active')[key]);
          }
        });
      });
      document.querySelector('#modal-confirm').addEventListener('click', e => {
        const game = $('#game').data('game');
        const hazards = game.drawHazards();
        if (game.level === 3) {
          $('#stage').removeClass('yellow');
          $('#stage').addClass('red');
        } else if (game.level === 2) {
          $('#stage').removeClass('green');
          $('#stage').addClass('yellow');
        }
        game.delete();
        const modal = document.querySelector('#modal');
        modal.parentNode.removeChild(modal);
        chooseHazard.chooseHazard(hazards, game);
      });
    }
  } else {
    if (playerFght < $('#game').data('drawFght')) {
      game.changeLife(playerFght - $('#game').data('drawFght'));
    }
    if (game.life > 1) {
      const hazards = game.drawHazards();
      if (game.level === 3) {
        $('#stage').removeClass('yellow');
        $('#stage').addClass('red');
      } else if (game.level === 2) {
        $('#stage').removeClass('green');
        $('#stage').addClass('yellow');
      } else if (game.level === 4) {
        endGame.resolveEnd(game);
      }
      game.delete();
      chooseHazard.chooseHazard(hazards, game);
    } else {
      endGame.lose();
    }
  }
};

const createModal = game => {
  const modal = document.createElement('div');
  modal.id = 'modal';

  const title = document.createElement('h4');
  let dfight = $('#game').data('drawFght');
  let pfight = game.playerFght;

  title.textContent = `Please select up to ${
    game.cardsToDelete
  } cards worth of life to remove`;
  modal.innerHTML += title.outerHTML;

  let cards = document.createElement('div');
  cards.id = 'card-selection';
  let newCard = null;
  game.activeAbilities.forEach((el, i) => {
    if (i % 7 === 6) {
      modal.innerHTML += cards.outerHTML;
      cards = document.createElement('div');
      cards.id = 'card-selection';
    }
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
