export const activateAbility = e => {
  console.log(e.path[e.path.length - 13].dataset.positions);
  console.log(e.target.dataset.value);
  console.log(e.target.textContent);
  const game = $('#game').data('game');
  const modal = document.createElement('div');
  modal.id = 'modal';
  if (e.target.dataset.value === 'destroy') {
  } else if (e.target.dataset.value === 'copy') {
  } else if (e.target.dataset.value === 'below pile') {
  } else if (e.target.dataset.value === 'step') {
    const temp = game.activeHazard;
    if (game.level === 2) {
      temp.hazard.yellow = temp.hazard.green;
    } else if (
      game.level === 3 &&
      game.activeHazard.hazard.yellow !== game.activeHazard.hazard.red
    ) {
      temp.hazard.red = temp.hazard.yellow;
    } else {
      temp.hazard.red = temp.hazard.yellow;
    }
    game.activeHazard = temp;
  } else if (e.target.dataset.value === 'exchange') {
  } else if (e.target.dataset.value === 'double') {
  } else if (e.target.dataset.value === 'sort') {
  }
};
