const createCard = require('./createCard.js');

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
  targetDiv.innerHTML += newCard.outerHTML;
  $('#game').data('drawCnt', $('#game').data('drawCnt') - 1);
  console.log($('#game').data('drawCnt'));
};
