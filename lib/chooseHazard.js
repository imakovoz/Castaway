export const chooseHazard = hazards => {
  const game_node = document.querySelector('#main-game');
  game_node.style.display = 'flex';
  game_node.style.flexDirection = 'row';
  game_node.style.justifyContent = 'space-around';
  game_node.style.alignItems = 'center';

  let card1 = document.createElement('div');
  let card1body = document.createElement('div');
  let aside1 = document.createElement('aside');
  card1.className = 'card-holder';
  aside1.id = 'card1-aside';
  card1body.id = 'card1body';
  card1.innerHTML += aside1.outerHTML;
  card1.innerHTML += card1body.outerHTML;
  game_node.innerHTML += card1.outerHTML;
  let card2 = document.createElement('div');
  let card2body = document.createElement('div');
  let aside2 = document.createElement('aside');
  card2.className = 'card-holder';
  aside2.id = 'card2-aside';
  card2body.id = 'card2body';
  card2.innerHTML += aside2.outerHTML;
  card2.innerHTML += card2body.outerHTML;
  game_node.innerHTML += card2.outerHTML;
};
