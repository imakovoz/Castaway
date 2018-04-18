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
