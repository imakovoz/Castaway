const Game = require('./lib/game.js');
const createCard = require('./lib/createCard.js');
const chooseHazard = require('./lib/chooseHazard.js');
const setup = require('./lib/setup.js');
const helpModal = require('./lib/helpModal.js');

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('audio').muted = true;
  helpModal.helpModal();
  const mainGame = document.querySelector('#main-game');
  let startGame = document.createElement('h2');
  startGame.id = 'startGame';
  startGame.textContent = 'Start Game?';
  mainGame.innerHTML += startGame.outerHTML;
  document.querySelector('#help').addEventListener('click', e => {
    helpModal.helpModal();
  });
  document.querySelector('#music').addEventListener('click', e => {
    if (document.querySelector('audio').muted) {
      document.querySelector('audio').muted = false;
      document.querySelector('#music').className = 'musicOn';
    } else {
      document.querySelector('audio').muted = true;
      document.querySelector('#music').className = 'musicOff';
    }
  });
  document.querySelector('#startGame').addEventListener('click', e => {
    const game = new Game();
    $('#game').data('game', game);
    setup.setup(game);
    const hazards = game.drawHazards();
    chooseHazard.chooseHazard(hazards, game);
  });
});
