export function setup(game) {
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
}
