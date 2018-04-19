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
  card_node.id = 'hazard-card';
  card_node.className = 'card';
  card_node.style.backgroundColor = 'brown';
  card_node.style.display = 'flex';
  card_node.style.flexDirection = 'column';
  card_node.style.alignItems = 'center';

  return card_node;
}

export function createAbility(card, stage) {
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
  let header = document.createElement('div');
  let body = document.createElement('div');
  header.id = 'card-header';
  body.id = 'card-body';
  title.textContent = `${card.ability.name}`;
  title.style.textAlign = 'center';

  if (card.ability.name === 'Weapon') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Strategy') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Vision') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Experience') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Knowledge') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Repetition') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Trick') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Nutritious Food') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Reader') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Equipement') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Very Hungry') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Tired') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Afraid') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Stupid') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Unconcentrated') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Hungry') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Distracted') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Weak') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Genius') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Focused') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Mimicry') {
    img.src = './assets/images/weapon.png';
  } else if (card.ability.name === 'Eat') {
    img.src = './assets/images/weapon.png';
  }
  img.style.height = '30%';
  img.style.width = '80%';
  img.style.margin = '5px 0';

  // let textBody = document.createElement('div');
  // textBody.textContent = card.ability.spec.text;
  // let textFight = document.createElement('div');
  // textFight.textContent = `Fight: ${card.ability.fight}`;
  //
  // header.innerHTML += textBody.outerHTML;
  // header.innerHTML += textFight.outerHTML;

  let fight = document.createElement('div');
  let fightIcon = document.createElement('img');
  let fightText = document.createElement('span');

  fight.style.position = 'relative';
  fight.style.borderBottomRightRadius = '50%';
  fight.style.backgroundColor = 'blue';
  fight.style.padding = '2px 4px 0px 0px';
  fight.style.margin = '-2px 0 0 -2px';

  fightIcon.src = './assets/images/fight-icon.png';
  fightText.textContent = `${card.ability['fight']}`;
  fight.innerHTML += fightText.outerHTML;
  fight.innerHTML += fightIcon.outerHTML;
  header.innerHTML += fight.outerHTML;

  let cost = document.createElement('div');
  let costIcon = document.createElement('img');
  let costText = document.createElement('span');

  cost.style.position = 'relative';
  cost.style.borderBottomLeftRadius = '50%';
  cost.style.backgroundColor = 'blue';
  cost.style.padding = '2px 4px 0px 0px';
  cost.style.margin = '-2px -2px 0 0';

  costIcon.src = './assets/images/cost-icon.png';
  costText.textContent = `${card.ability['cost']}`;
  cost.innerHTML += costText.outerHTML;
  cost.innerHTML += costIcon.outerHTML;
  header.innerHTML += cost.outerHTML;
  const text = card.ability.spec.text || '...';
  body.textContent = `${text}`;

  card_node.innerHTML += title.outerHTML;
  if (card.ability.name.length < 11) {
    card_node.innerHTML += document.createElement('br').outerHTML;
  }
  card_node.innerHTML += img.outerHTML;
  card_node.innerHTML += body.outerHTML;
  card_node.innerHTML += header.outerHTML;

  card_node.className = 'card';
  card_node.id = 'ability-card';
  card_node.style.backgroundColor = 'brown';
  card_node.style.display = 'flex';
  card_node.style.flexDirection = 'column';
  card_node.style.alignItems = 'center';

  return card_node;
}
