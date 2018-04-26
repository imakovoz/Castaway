const Game = require('./game.js');
const setup = require('./setup.js');
const createCard = require('./createCard.js');
const chooseHazard = require('./chooseHazard.js');

export const helpModal = () => {
  const gameDiv = document.querySelector('#modal-hook');
  const modal = document.createElement('div');
  modal.id = 'modal';
  const helpModal = document.createElement('div');
  helpModal.id = 'helpModal';
  modal.innerHTML += helpModal.outerHTML;
  gameDiv.innerHTML += modal.outerHTML;
  introModal();
};

const introModal = () => {
  const helpModal = document.querySelector('#helpModal');
  const title = document.createElement('h1');
  title.textContent = 'Castaway';
  helpModal.innerHTML = title.outerHTML;
  const intro = document.createElement('div');
  intro.innerHTML =
    'Thanks for playing Castaway, my version of the card game Friday by Friedemann Friese!' +
    '<br>' +
    '<br>' +
    ' You are Friday and spend your time on a deserted Island. After Robinson suddenly capsizes with his ship and runs ashore at your beach, your peaceful times are disturbed. To give Robinson a chance to leave the Island again, you start to teach him to improve his survival abilities against the hazards of the Island. If Robinson beats two Pirates at the end of the game, he successfully leaves the island and you will have your beloved peace back';
  helpModal.innerHTML += intro.outerHTML;
  const navigation = document.createElement('div');
  navigation.id = 'helpModal-nav';
  const basic = document.createElement('div');
  basic.id = 'helpModal-basic';
  basic.textContent = 'Basic Instructions';
  const tutorial = document.createElement('div');
  tutorial.id = 'helpModal-tutorial';
  tutorial.textContent = 'Tutorial';
  const powers = document.createElement('div');
  powers.id = 'helpModal-powers';
  powers.textContent = 'Power Details';
  navigation.innerHTML += basic.outerHTML;
  navigation.innerHTML += tutorial.outerHTML;
  navigation.innerHTML += powers.outerHTML;
  helpModal.innerHTML += navigation.outerHTML;

  const returnDiv = document.createElement('div');
  returnDiv.id = 'helpModal-returnDiv';
  helpModal.innerHTML += returnDiv.outerHTML;
  document
    .querySelector('#helpModal-returnDiv')
    .addEventListener('click', e => {
      const modal = document.querySelector('#modal');
      modal.parentNode.removeChild(modal);
      document.querySelector('#startGame').addEventListener('click', e => {
        const game = new Game();
        $('#game').data('game', game);
        setup.setup(game);
        let pirate = createCard.createPirate(game.goals[0]);
        document.querySelector('#goal').innerHTML = pirate.outerHTML;
        pirate = createCard.createPirate(game.goals[1]);
        document.querySelector('#goal').innerHTML += pirate.outerHTML;
        const hazards = game.drawHazards();
        chooseHazard.chooseHazard(hazards, game);
      });
    });

  document.querySelector('#helpModal-basic').addEventListener('click', e => {
    basicModal();
  });

  document.querySelector('#helpModal-tutorial').addEventListener('click', e => {
    tutorialGuide();
  });

  document.querySelector('#helpModal-powers').addEventListener('click', e => {
    powersModal();
  });
};

const basicModal = () => {
  const helpModal = document.querySelector('#helpModal');
  const title = document.createElement('h1');
  title.textContent = 'Basic Instructions';
  helpModal.innerHTML = title.outerHTML;
  const basic = document.createElement('div');
  basic.innerHTML =
    'While playing you are trying to guide Robinson through the game. He must win against two pirates without dying to finally leave the island again. <br><br> At the start of the game Robinson is not very cunning. In this game the pile of fighting cards (represented on the bottom right corner of the screen by the card pile) represents his abilities. By comparison Robinson‘s health is in good shape and he starts with many life points. You have two possibilities to help Robinson. You can either cleverly beat the hazards of the island (represented on the bottom left corner of the screen by the card pile) and receive additional cards to improve Robinson‘s fighting abilities, or you deliberately lose against certain hazards and pay with Robinson‘s life points to remove unwanted fighting cards from play. <br><br> During the game you will improve the quality and quantity of your fighting cards thanks to both possibilities and help Robinson with his newly gained abilities and knowledge to win against even more difficult hazards. However, life on the island is energy-sapping for Robinson so he is forced to always add aging cards (represented on the top left corner of the screen by the card pile) to his fighting cards pile. These cards are all cumbersome, so you‘d better remember to keep them in mind when planning your next steps. <br><br> It is up to you. Use Robinson‘s life points cleverly and choose the correct hazards to keep Robinson healthy and strong for the final fights against both pirates.';
  helpModal.innerHTML += basic.outerHTML;
  const returnDiv = document.createElement('div');
  returnDiv.id = 'helpModal-returnDiv';
  helpModal.innerHTML += returnDiv.outerHTML;
  document
    .querySelector('#helpModal-returnDiv')
    .addEventListener('click', e => {
      introModal();
    });
};

const powersModal = () => {
  const helpModal = document.querySelector('#helpModal');
  const title = document.createElement('h1');
  title.textContent = 'Special Card Powers';
  helpModal.innerHTML = title.outerHTML;
  const basic = document.createElement('div');
  basic.innerHTML =
    '<strong>1x destroy:</strong> Not all fighting cards in the Robinson stack are helpful for you. With this special ability you can destroy one fighting card and remove it from the game.<br><br> <strong>1x double:</strong> You can double the fighting value of 1 of your drawn fighting cards. This ability is not cumulative!<br><br><strong>step -1:</strong> If you fight against a hazard in the »yellow Step« or the »red Step«, you can reduce the hazard value by one Step. This special ability is useless against »green Step« hazards and pirates. <br><br> <strong>sort 3 cards:</strong> You can draw up to 3 cards one after the other from the Robinson stack and look at them. Afterwards you can discard up to 1 of these cards on the Robinson discard pile and place the remaining cards face-down back on the Robinson stack in the order you choose. <br><br> <strong>1x exchange:</strong> You place 1 of the other drawn face-up fighting cards on the Robinson discard pile (you can choose one card you already used for the special ability) and draw a new card as replacement. If the new card has a special ability, you can use it now or later during the fight.<br><br> <strong>1x below the stack:</strong> You place 1 of the other drawn drawn fighting cards back below the Robinson stack. If you choose one of the free cards from the left side of the hazard card, you can draw an exchange card.';
  // <strong>1x copy:</strong> You can copy the special ability of 1 of the other drawn fighting cards, to use it again. You can copy the same ability with several »copy« abilities. <br><br>
  helpModal.innerHTML += basic.outerHTML;
  const returnDiv = document.createElement('div');
  returnDiv.id = 'helpModal-returnDiv';
  helpModal.innerHTML += returnDiv.outerHTML;
  document
    .querySelector('#helpModal-returnDiv')
    .addEventListener('click', e => {
      introModal();
    });
};

const tutorialGuide = () => {
  const modal = document.querySelector('#modal');
  const instructions = document.createElement('div');
  instructions.id = 'instructions';
  const helpModal = document.querySelector('#helpModal');
  document.getElementById('startGame').click();
  helpModal.parentNode.removeChild(helpModal);
  modal.style.backgroundColor = 'rgb(0, 0, 0, 0)';
  modal.style.justifyContent = 'flex-end';
  modal.innerHTML += instructions.outerHTML;
  tutorial1();
};

const tutorial1 = () => {
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  instructions.innerHTML =
    'These three piles represent your abilities, hazards on the island, and your aging <br> On the top left is the aging pile, below that is the hazards pile, and on the right are your starting abilities <br><br> ***Click anywhere to continue***';
  document.querySelectorAll('.card-holder').forEach((card, i) => {
    if ((i !== 2) & (i !== 3)) {
      card.style.border = '5px solid blue';
    }
  });
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial2();
    });
  }, 500);
};

const tutorial2 = () => {
  document.querySelectorAll('.card-holder').forEach(card => {
    card.style.border = 'none';
  });
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  instructions.innerHTML =
    'These two cards represent pirates and your final challenges on the island  <br><br> ***Click anywhere to continue***';
  document.getElementById('goal').style.border = '5px solid blue';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial3();
    });
    modal.removeEventListener('click', e => {
      tutorial2();
    });
  }, 500);
};

const tutorial3 = () => {
  document.getElementById('goal').style.border = 'none';
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  const arr1 = [];
  document.querySelectorAll('#card-body').forEach(el => {
    arr1.push(el.querySelectorAll('div')[0]);
  });
  document.querySelectorAll('.pirate').forEach(el => {
    arr1.push(el.querySelectorAll('div')[0]);
  });
  const arr2 = [];
  document.querySelectorAll('#card-body').forEach(el => {
    arr2.push(el.querySelectorAll('div')[1]);
  });
  document.querySelectorAll('.pirate').forEach(el => {
    arr2.push(el.querySelectorAll('div')[1]);
  });
  arr1.forEach(el => {
    el.style.border = '3px solid blue';
  });
  arr2.forEach(el => {
    el.style.border = '3px solid green';
  });
  instructions.innerHTML =
    'All hazards and pirates have draw and fight values associated with them<br>Values highlighted in blue represent the number of cards you may draw before you must pay life<br>The values in green are the fight score that you must beat to defeat the challenge<br><br> ***Click anywhere to continue***';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial4();
    });
    modal.removeEventListener('click', e => {
      tutorial3();
    });
  }, 500);
};

const tutorial4 = () => {
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  const arr1 = [];
  document.querySelectorAll('#card-body').forEach(el => {
    arr1.push(el.querySelectorAll('div')[0]);
  });
  document.querySelectorAll('.pirate').forEach(el => {
    arr1.push(el.querySelectorAll('div')[0]);
  });
  const arr2 = [];
  document.querySelectorAll('#card-body').forEach(el => {
    arr2.push(el.querySelectorAll('div')[1]);
  });
  document.querySelectorAll('.pirate').forEach(el => {
    arr2.push(el.querySelectorAll('div')[1]);
  });
  arr1.forEach(el => {
    el.style.border = 'none';
  });
  arr2.forEach(el => {
    el.style.border = 'none';
  });
  document
    .getElementById('card1-aside')
    .querySelector('img')
    .click();
  document.getElementById('ability-side-1').style.border = '5px solid blue';
  instructions.innerHTML =
    'Each hazard card has a corresponding ability card that is added to your spent abilities pile if the hazard is beat<br><br> ***Click anywhere to continue***';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial5();
    });
    modal.removeEventListener('click', e => {
      tutorial4();
    });
  }, 500);
};

const tutorial5 = () => {
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  document.getElementById('ability-side-1').style.border = 'none';
  document
    .getElementById('card-header')
    .querySelectorAll('div')[0].style.border =
    '3px solid orange';
  document
    .getElementById('card-header')
    .querySelectorAll('div')[1].style.border =
    '3px solid yellow';
  document
    .getElementById('ability-card')
    .querySelector('#card-body').style.border =
    '3px solid red';
  instructions.innerHTML =
    'Each ability card has a fight value that it contributes to your total fight for that round marked in orange<br>Each card also has a cost which refers to the number of life points it can be removed from the game for after a lost round marked in yellow<br>Finally each card can have a power outlined in the section marked in red<br><br> ***Click anywhere to continue***';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial6();
    });
    modal.removeEventListener('click', e => {
      tutorial5();
    });
  }, 500);
};

const tutorial6 = () => {
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  document.getElementById('ability-side-1').style.border = 'none';
  document
    .getElementById('card-header')
    .querySelectorAll('div')[0].style.border =
    'none';
  document
    .getElementById('card-header')
    .querySelectorAll('div')[1].style.border =
    'none';
  document
    .getElementById('ability-card')
    .querySelector('#card-body').style.border =
    'none';
  document
    .getElementById('card1-aside')
    .querySelector('input')
    .click();
  document.getElementById('confirm-btn').style.border = '5px solid blue';
  instructions.innerHTML =
    'A card can be easily selected by pressing the checkbox located to the left of each card and then confirming by selecting the chest highlighted in blue<br><br> ***Click anywhere to continue***';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial7();
    });
    modal.removeEventListener('click', e => {
      tutorial6();
    });
  }, 500);
};

const tutorial7 = () => {
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  document
    .getElementById('right-game')
    .querySelector('.card-holder').style.border =
    '5px solid blue';
  instructions.innerHTML =
    'Once selected the hazard will appear in the middle of the screen and you can draw a card by clicking the abilities deck highlighted in blue<br><br> ***Click anywhere to continue***';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      tutorial8();
    });
    modal.removeEventListener('click', e => {
      tutorial7();
    });
  }, 500);
};

const tutorial8 = () => {
  const modal = document.getElementById('modal');
  const instruction = document.getElementById('instructions');
  document
    .getElementById('right-game')
    .querySelector('.card-holder').style.border =
    'none';
  document.getElementById('abilities').click();
  document.getElementById('resolve-fight').style.border = 'none';
  instructions.innerHTML =
    'You may keep drawing cards as long as there are cards to be drawn<br>Once you are ready you can resolve the fight by clicking the button outlined in blue<br>Best of luck in your adventures escaping the island<br><br> ***Click anywhere to continue***';
  setTimeout(() => {
    modal.addEventListener('click', e => {
      const modal = document.getElementById('modal');
      const helpModal = document.createElement('div');
      helpModal.id = 'helpModal';
      modal.innerHTML = helpModal.outerHTML;
      introModal();
      // const instructions = document.getElementById('instructions');
      // instructions.parentNode.removeChild(instructions);
    });
  }, 500);
};
