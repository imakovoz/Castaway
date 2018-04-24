const createCard = require('./createCard.js');
const fightHazard = require('./fightHazard.js');

export const resolveEnd = game => {
  game.end = true;
  const gameNode = document.querySelector('#main-game');
  const fightDiv = document.createElement('div');
  fightDiv.id = 'fight-div';
  const drawDiv = document.createElement('div');
  drawDiv.id = 'draw-div';
  const hazardDiv = document.createElement('div');
  hazardDiv.id = 'hazard-div';
  const pushDiv = document.createElement('div');
  pushDiv.id = 'push-div';

  const hazardCard = createCard.createPirate(game.goals[0]);
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
  drawCnt.textContent = `Free draws: ${game.goals[0].draw}`;
  const resolve = document.createElement('div');
  resolve.textContent = 'Resolve Fight';
  resolve.id = 'resolve-fight';
  fightDisp.innerHTML += totalFight.outerHTML;
  fightDisp.innerHTML += drawCnt.outerHTML;
  fightDisp.innerHTML += resolve.outerHTML;
  hazardDiv.innerHTML += fightDisp.outerHTML;

  game.playerFght = 0;
  $('#game').data('drawCnt', game.goals[0].draw);

  $('#game').data('drawFght', game.goals[0].fight);

  fightDiv.innerHTML += drawDiv.outerHTML;
  fightDiv.innerHTML += hazardDiv.outerHTML;
  fightDiv.innerHTML += pushDiv.outerHTML;
  gameNode.innerHTML = fightDiv.outerHTML;
  fightHazard.setEvents(game);
};

export const lose = () => {
  const gameNode = document.querySelector('#main-game');
  const loseGame = document.createElement('div');
  loseGame.id = 'loseGame';
  loseGame.textContent = 'You lost the game';
  gameNode.innerHTML = loseGame.outerHTML;
};

export const win = () => {
  const gameNode = document.querySelector('#main-game');
  const winGame = document.createElement('div');
  winGame.id = 'winGame';
  winGame.textContent = 'You won the game';
  gameNode.innerHTML = winGame.outerHTML;
};
