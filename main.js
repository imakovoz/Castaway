const Game = require('./lib/game.js');
const createCard = require('./lib/createCard.js');
const chooseHazard = require('./lib/chooseHazard.js');
const setup = require('./lib/setup.js');

document.addEventListener('DOMContentLoaded', function(event) {
  const game = new Game();
  $('#game').data('game', game);
  setup.setup(game);
  const hazards = game.drawHazards();
  chooseHazard.chooseHazard(hazards, game);
});
