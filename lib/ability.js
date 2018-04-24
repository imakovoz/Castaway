const createCard = require('./createCard.js');
const fightHazard = require('./fightHazard.js');

export const activateAbility = e => {
  // console.log(e.path[e.path.length - 13].dataset.positions);
  // console.log(e.target.dataset.value);
  // console.log(e.target.textContent);
  // document.querySelector('#game').dataset.selected = [];
  // document.querySelector('#game').dataset.select_num = e.target.textContent;

  const game = $('#game').data('game');
  if (e.target.dataset.value === 'destroy') {
    setupModalAll(`Select a card to remove from the game`, e, game);
  } else if (e.target.dataset.value === 'copy') {
  } else if (e.target.dataset.value === 'below pile') {
    setupModalAll(`Select a card to move to bottom of abilities pile`, e, game);
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
    if (e.target.textContent === '1') {
      setupModalAll(
        `Select a card to discard and exchange for another`,
        e,
        game
      );
    } else {
      setupModalAll(`Select up to 2 cards to discard and exchange`, e, game);
    }
  } else if (e.target.dataset.value === 'double') {
    setupModalAll(`Select a card to double fighting strength`, e, game);
  } else if (e.target.dataset.value === 'sort') {
    const modal = document.createElement('div');
    const nxtCards = game.abilities.splice(game.abilities.length - 4, 3);
    modal.id = 'modal';
    const title = document.createElement('h4');
    title.textContent = 'Choose 1 card to delete';
    modal.innerHTML += title.outerHTML;
    const cards = document.createElement('div');
    cards.id = 'card-selection';
    let card = null;
    $('#game').data('active', nxtCards);
    $('#game').data('selected', []);
    $('#game').data('total', 1);
    $('#game').data('type', e.target.dataset.value);
    console.log(nxtCards[0].ability);
    nxtCards.forEach((ability, i) => {
      card = createCard.createAbility(ability, game.level);
      card.dataset.place = i;
      cards.innerHTML += card.outerHTML;
    });
    modal.innerHTML += cards.outerHTML;
    const confirm = document.createElement('div');
    confirm.id = 'modal-confirm-btn';
    confirm.textContent = 'confirm';
    modal.innerHTML += confirm.outerHTML;
    document.querySelector('#game').innerHTML += modal.outerHTML;

    document
      .querySelector('#card-selection')
      .querySelectorAll('.card')
      .forEach(card => {
        card.addEventListener('click', e => {
          selector(e);
        });
      });
  }
  document.querySelector('#modal-confirm-btn').style.cursor = 'pointer';
  document.querySelector('#modal-confirm-btn').addEventListener('click', e => {
    confirm(e);
  });
  const holder = e.path[e.path.length - 13].querySelectorAll('#power-box-gem');
  if (holder.length > 1) {
    for (let i = e.target.dataset.pos; i < holder.length; i++) {
      if (i === holder.length - 1) {
        holder[i].textContent = '';
        holder[i].id = 'power-box';
      } else {
        holder[i].outerHTML = holder[i + 1].outerHTML;
        holder[i].dataset.value = holder[i + 1].dataset.value;
        holder[i].dataset.pos = holder[i + 1].dataset.pos - 1;
      }
    }
  } else {
    const divEl = document.querySelector('#' + e.path[e.path.length - 13].id);
    divEl.parentNode.removeChild(divEl);
  }
};

const setupModalAll = (text, e, game) => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  const title = document.createElement('h4');
  title.textContent = text;
  modal.innerHTML += title.outerHTML;
  const cards = document.createElement('div');
  cards.id = 'card-selection';
  let card = null;
  $('#game').data('active', game.returnActiveAbilities());
  $('#game').data('selected', []);
  $('#game').data('total', e.target.textContent);
  $('#game').data('type', e.target.dataset.value);
  game.activeAbilities.forEach((ability, i) => {
    card = createCard.createAbility(ability, game.level);
    card.dataset.place = i;
    cards.innerHTML += card.outerHTML;
  });
  modal.innerHTML += cards.outerHTML;
  const confirm = document.createElement('div');
  confirm.id = 'modal-confirm-btn';
  confirm.textContent = 'confirm';
  modal.innerHTML += confirm.outerHTML;
  document.querySelector('#game').innerHTML += modal.outerHTML;

  document
    .querySelector('#card-selection')
    .querySelectorAll('.card')
    .forEach(card => {
      card.addEventListener('click', e => {
        selector(e);
      });
    });
};

// const setupModalCopy = (e, game) => {
//   const modal = document.createElement('div');
//   modal.id = 'modal';
//   const title = document.createElement('h4');
//   title.textContent = `Select a card whose abilities you would like to copy`;
//   modal.innerHTML += title.outerHTML;
//   const cards = document.createElement('div');
//   cards.id = 'card-selection';
//   let card = null;
//   $('#game').data('active', game.powers;
//   $('#game').data('selected', []);
//   $('#game').data('total', e.target.textContent);
//   $('#game').data('type', e.target.dataset.value);
//   game.powers.forEach((ability, i) => {
//     card = createCard.createAbility(ability, game.level);
//     card.dataset.place = i;
//     cards.innerHTML += card.outerHTML;
//   });
//   modal.innerHTML += cards.outerHTML;
//   const confirm = document.createElement('div');
//   confirm.id = 'modal-confirm-btn';
//   confirm.textContent = 'confirm';
//   modal.innerHTML += confirm.outerHTML;
//   document.querySelector('#game').innerHTML += modal.outerHTML;
//
//   document
//     .querySelector('#card-selection')
//     .querySelectorAll('.card')
//     .forEach(card => {
//       card.addEventListener('click', e => {
//         selector(e);
//       });
//     });
// };

const selector = e => {
  const game = $('#game').data('game');
  const position = e.path[e.path.length - 11].dataset.place;

  let test = true;
  $('#game')
    .data('selected')
    .forEach((el, i) => {
      if (el === $('#game').data('active')[position] && test) {
        test = false;
        $('#game')
          .data('selected')
          .splice(i, 1);
        e.path[e.path.length - 11].style.border = '2px solid transparent';
        $('#game').data('total', $('#game').data('total') + 1);
      }
    });
  if (test && $('#game').data('total') > 0) {
    $('#game')
      .data('selected')
      .push($('#game').data('active')[position]);
    e.path[e.path.length - 11].style.border = '2px solid blue';
    $('#game').data('total', $('#game').data('total') - 1);
  }
};

const confirm = e => {
  const game = $('#game').data('game');
  if ($('#game').data('type') === 'double') {
    $('#game')
      .data('selected')
      .forEach(ability => {
        game.playerFght += ability.ability.fight;
      });
    $('#total-fight').text(`Total Fight: ${game.playerFght}`);
  } else if ($('#game').data('type') === 'destroy') {
    $('#game')
      .data('selected')
      .forEach(ability => {
        let cards = document
          .querySelector('#fight-div')
          .querySelectorAll('#ability-card');
        console.log(ability.ability.name);
        console.log(cards[0].querySelector('h4').textContent);
        for (let i = 0; i < cards.length; i++) {
          if (
            cards[i].querySelector('h4').textContent === ability.ability.name
          ) {
            cards[i].parentNode.removeChild(cards[i]);
            game.playerFght -= game.activeAbilities[i].ability.fight;
            $('#total-fight').text(`Total Fight: ${game.playerFght}`);
            game.activeAbilities.splice(i, 1);
            i = cards.length;
          }
        }
      });
  } else if ($('#game').data('type') === 'exchange') {
    $('#game')
      .data('selected')
      .forEach(ability => {
        let cards = document
          .querySelector('#fight-div')
          .querySelectorAll('#ability-card');
        for (let i = 0; i < cards.length; i++) {
          if (
            cards[i].querySelector('h4').textContent === ability.ability.name
          ) {
            cards[i].parentNode.removeChild(cards[i]);
            game.playerFght -= game.activeAbilities[i].ability.fight;
            $('#total-fight').text(`Total Fight: ${game.playerFght}`);
            game.spentAbilities.push(game.activeAbilities.splice(i, 1));
            i = cards.length;
            if ($('#game').data('drawCnt') < 0) {
              $('#game').data('drawCnt', 1);
              $('#draw-cnt').text(`Free draws: ${$('#game').data('drawCnt')}`);
            } else {
              $('#game').data('drawCnt', $('#game').data('drawCnt') + 1);
              $('#draw-cnt').text(`Free draws: ${$('#game').data('drawCnt')}`);
            }
          }
        }
      });
  } else if ($('#game').data('type') === 'below pile') {
    $('#game')
      .data('selected')
      .forEach(ability => {
        let cards = document
          .querySelector('#fight-div')
          .querySelectorAll('#ability-card');
        for (let i = 0; i < cards.length; i++) {
          if (
            cards[i].querySelector('h4').textContent === ability.ability.name
          ) {
            cards[i].parentNode.removeChild(cards[i]);
            game.abilities = game.activeAbilities
              .splice(i, 1)
              .concat(game.abilities);
            i = cards.length;
            if ($('#game').data('drawCnt') < 0) {
              $('#game').data('drawCnt', 1);
              $('#draw-cnt').text(`Free draws: ${$('#game').data('drawCnt')}`);
            } else {
              $('#game').data('drawCnt', $('#game').data('drawCnt') + 1);
              $('#draw-cnt').text(`Free draws: ${$('#game').data('drawCnt')}`);
            }
          }
        }
      });
  } else if ($('#game').data('type') === 'sort') {
    $('#game').data('type', 'sort-next');
    $('#game').data('total', 1);
    document.querySelector('#modal').querySelector('h4').textContent =
      'Select next card to return to pile';
    $('#game')
      .data('selected')
      .forEach(ability => {
        let cards = document
          .querySelector('#card-selection')
          .querySelectorAll('#ability-card');
        console.log(cards);
        console.log(ability);
        for (let i = 0; i < cards.length; i++) {
          if (
            cards[i].querySelector('h4').textContent === ability.ability.name
          ) {
            cards[i].parentNode.removeChild(cards[i]);
            $('#game').data('selected', []);
            let test = $('#game').data('active');
            test.splice(i, 1);
            $('#game').data('active', test);
            i = cards.length;
          }
        }
      });
  } else if ($('#game').data('type') === 'sort-next') {
    $('#game').data('total', 1);
    console.log($('#game').data('active'));
    let cards = document
      .querySelector('#card-selection')
      .querySelectorAll('#ability-card');
    console.log(cards);
    console.log($('#game').data('selected'));
    let selected = $('#game').data('selected');
    let checker = true;
    for (let i = 0; i < cards.length; i++) {
      if (checker) {
        cards[i].dataset.place = i;
      } else {
        cards[i].dataset.place = i - 1;
      }
      if (
        cards[i].querySelector('h4').textContent === selected[0].ability.name &&
        checker
      ) {
        checker = false;
        cards[i].parentNode.removeChild(cards[i]);
        game.abilities.push($('#game').data('selected')[0]);
        let test = $('#game').data('active');
        test.splice(i, 1);
        console.log(test);
        $('#game').data('active', test);
        $('#game').data('selected', []);
        i = cards.length;
      }
    }

    if (
      document
        .querySelector('#card-selection')
        .querySelectorAll('#ability-card').length === 0
    ) {
      $('#game').data('type', 'null');
    }
  }
  if (
    $('#game').data('type') !== 'sort-next' &&
    $('#game').data('type') !== 'sort'
  ) {
    const modal = document.querySelector('#modal');
    modal.parentNode.removeChild(modal);
    document.querySelector(`#resolve-fight`).addEventListener('click', e => {
      $('#game').data('active', game.activeAbilities.slice(0));
      fightHazard.resolveFight(e);
    });
    document.querySelector(`#abilities`).addEventListener('click', e => {
      drawCard(e);
    });
  }
};
