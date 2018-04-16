const Game = require('./lib/game.js');

document.addEventListener('DOMContentLoaded', function(event) {
  const game = new Game();
  const life = document.querySelector('#life');
  const age = document.querySelector('#age-aside');
  const hazard_stage = document.querySelectorAll('#hazard-stage');
  const stage = document.querySelector('#stage');

  if (game.level === 3) {
    stage.style.backgroundColor = 'red';
  } else if (game.level === 2) {
    stage.style.backgroundColor = 'yellow';
  } else {
    stage.style.backgroundColor = 'green';
  }

  life.textContent = `Life: ${game.life}`;
  var age_img = document.createElement('img');
  if (game.age() === 'young') {
    age_img.src = './assets/images/young.png';
    age.appendChild(age_img);
  } else {
    age_img.src = './assets/images/old.png';
    age.appendChild(age_img);
  }
  hazard_stage[game.level - 1].style.border = '1px solid white';
});
