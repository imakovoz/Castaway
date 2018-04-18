export function setup(game) {
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
}
