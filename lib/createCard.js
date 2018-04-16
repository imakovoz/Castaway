export function createHazard(card, stage) {
  if (stage === 1) {
    stage = 'green';
  } else if (stage === 2) {
    stage = 'yellow';
  } else {
    stage = 'red';
  }
  let card_node = document.createElement('div');
  let img = document.createElement('img');
  let title = document.createElement('h4');
  let body = document.createElement('div');
  body.id = 'card-body';
  title.textContent = `${card.hazard.name}`;
  title.style.textAlign = 'center';
  title.style.fontSize = 'smaller';

  if (card.hazard.name === 'Explore The Wreck') {
    img.src = './assets/images/wreck.jpg';
  } else if (card.hazard.name === 'Wild Animals') {
    img.src = './assets/images/tiger.jpg';
  } else if (card.hazard.name === 'Cannibals') {
    img.src = './assets/images/cannibals.jpg';
  } else if (card.hazard.name === 'Explore Deep Into The Island') {
    img.src = './assets/images/jungle.jpg';
  } else if (card.hazard.name === 'Explore The Island') {
    img.src = './assets/images/island.jpg';
  }
  img.style.height = '30%';
  img.style.width = '80%';
  img.style.margin = '5px 0';

  let draw = document.createElement('div');
  let drawIcon = document.createElement('img');
  let drawText = document.createElement('span');
  let fight = document.createElement('div');
  let fightIcon = document.createElement('img');
  let fightText = document.createElement('span');

  draw.style.position = 'relative';
  draw.style.borderRadius = '50%';
  draw.style.backgroundColor = 'blue';
  draw.style.padding = '7px 7px 2px 7px';
  fight.style.position = 'relative';
  fight.style.borderRadius = '50%';
  fight.style.backgroundColor = 'blue';
  fight.style.padding = '7px 7px 2px 7px';

  drawIcon.src = './assets/images/card-draw-icon.png';
  drawText.textContent = `${card.hazard['draw']}`;
  fightIcon.src = './assets/images/fight-icon.png';
  fightText.textContent = `${card.hazard[stage]}`;

  draw.innerHTML += drawText.outerHTML;
  fight.innerHTML += fightText.outerHTML;
  draw.innerHTML += drawIcon.outerHTML;
  fight.innerHTML += fightIcon.outerHTML;
  body.innerHTML += draw.outerHTML;
  body.innerHTML += fight.outerHTML;

  card_node.innerHTML += title.outerHTML;
  if (card.hazard.name === 'Wild Animals' || card.hazard.name === 'Cannibals') {
    card_node.innerHTML += document.createElement('br').outerHTML;
  }
  card_node.innerHTML += img.outerHTML;
  card_node.innerHTML += body.outerHTML;
  card_node.className = 'card';
  card_node.style.backgroundColor = 'brown';
  card_node.style.display = 'flex';
  card_node.style.flexDirection = 'column';
  card_node.style.alignItems = 'center';

  return card_node;
}
