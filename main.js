const Game = require('./lib/game.js');
const createCard = require('./lib/createCard.js');

document.addEventListener('DOMContentLoaded', function(event) {
  const game = new Game();
  const hazard_aside = document.querySelector('#hazard-aside');
  let hazard_stage = document.createElement('span');
  hazard_stage.style.backgroundColor = 'green';
  hazard_stage.id = 'hazard-stage';
  hazard_aside.innerHTML += hazard_stage.outerHTML;
  hazard_stage.style.backgroundColor = 'yellow';
  hazard_stage.id = 'hazard-stage';
  hazard_aside.innerHTML += hazard_stage.outerHTML;
  hazard_stage.style.backgroundColor = 'red';
  hazard_stage.id = 'hazard-stage';
  hazard_aside.innerHTML += hazard_stage.outerHTML;

  const life = document.querySelector('#life');
  const age = document.querySelector('#age-aside');
  const hazard_stages = document.querySelectorAll('#hazard-stage');
  const stage = document.querySelector('#stage');
  const game_node = document.querySelector('#main-game');

  if (game.level === 3) {
    stage.style.backgroundColor = 'red';
  } else if (game.level === 2) {
    stage.style.backgroundColor = 'yellow';
  } else {
    stage.style.backgroundColor = 'green';
  }

  life.textContent = `Life: ${game.life}`;
  const age_img = document.createElement('img');
  if (game.age() === 'young') {
    age_img.src = './assets/images/young.png';
    age.appendChild(age_img);
  } else {
    age_img.src = './assets/images/old.png';
    age.appendChild(age_img);
  }

  hazard_stages[game.level - 1].style.border = '1px solid white';

  const hazards = game.drawHazards();
  let switcher = document.createElement('img');
  switcher.src = './assets/images/switch.png';

  let card1 = document.createElement('div');
  let card1body = createCard.createHazard(hazards[0], game.level);
  let aside1 = document.createElement('aside');

  card1.className = 'card-holder';
  card1.id = 'hazard-side';
  aside1.id = 'card1-aside';

  switcher.id = 'switch-1';
  aside1.innerHTML += switcher.outerHTML;
  card1.innerHTML += aside1.outerHTML;
  card1.innerHTML += card1body.outerHTML;
  game_node.innerHTML += card1.outerHTML;

  let card2 = document.createElement('div');
  let card2body = createCard.createHazard(hazards[1], game.level);
  let aside2 = document.createElement('aside');

  card2.className = 'card-holder';
  card2.id = 'hazard-side';
  aside2.id = 'card2-aside';

  switcher.id = 'switch-2';
  aside2.innerHTML += switcher.outerHTML;
  card2.innerHTML += aside2.outerHTML;
  card2.innerHTML += card2body.outerHTML;
  game_node.innerHTML += card2.outerHTML;

  document.querySelector('#switch-1').addEventListener('click', e => {
    console.log(e);
  });
  document.querySelector('#switch-2').addEventListener('click', e => {
    console.log(e.path[0].id.split('-')[1]);
  });
});
