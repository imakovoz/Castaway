const start = [
  { ability: { fight: 2, name: 'Genius', cost: 1, spec: false } },
  { ability: { fight: 1, name: 'Focused', cost: 1, spec: false } },
  { ability: { fight: 1, name: 'Focused', cost: 1, spec: false } },
  { ability: { fight: 1, name: 'Focused', cost: 1, spec: false } },
  { ability: { fight: 1, name: 'Focused', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  { ability: { fight: 0, name: 'Weak', cost: 1, spec: false } },
  {
    ability: {
      fight: 0,
      name: 'eat',
      cost: 1,
      spec: { type: 'life', value: 2, text: 'Heal 2 life' },
    },
  },
  { ability: { fight: -1, name: 'Distracted', cost: 1, spec: false } },
  { ability: { fight: -1, name: 'Distracted', cost: 1, spec: false } },
  { ability: { fight: -1, name: 'Distracted', cost: 1, spec: false } },
  { ability: { fight: -1, name: 'Distracted', cost: 1, spec: false } },
  { ability: { fight: -1, name: 'Distracted', cost: 1, spec: false } },
];

const age_young = [
  {
    ability: {
      fight: 0,
      name: 'Hungry',
      cost: 2,
      spec: { type: 'life', value: -1, text: 'Lose 1 life' },
    },
  },
  { ability: { fight: -1, name: 'Unconcentrated', cost: 2, spec: false } },
  { ability: { fight: -1, name: 'Unconcentrated', cost: 2, spec: false } },
  { ability: { fight: -2, name: 'Stupid', cost: 2, spec: false } },
  { ability: { fight: -2, name: 'Stupid', cost: 2, spec: false } },
  // { ability: { fight: -3, name: 'very stupid', cost: 2, spec: false } },
  {
    ability: {
      fight: -1,
      name: 'Afraid',
      cost: 2,
      spec: {
        type: 'negate top card',
        value: false,
        text: 'Strongest cards fight is now 0',
      },
    },
  },
  {
    ability: {
      fight: -1,
      name: 'Tired',
      cost: 2,
      spec: { type: 'stop', value: false, text: 'Stop turn' },
    },
  },
];

const age_old = [
  {
    ability: {
      fight: 0,
      name: 'Very Hungry',
      cost: 2,
      spec: { type: 'life', value: -2, text: 'Lose 2 life' },
    },
  },
  { ability: { fight: -5, name: 'self homicidal', cost: 2, spec: false } },
  { ability: { fight: -4, name: 'idiot', cost: 2, spec: false } },
];

const hazards = [
  {
    ability: { fight: 4, name: 'Weapon', cost: 1, spec: false },
    hazard: { draw: 5, green: 5, yellow: 9, red: 14, name: 'Cannibals' },
  },
  {
    ability: { fight: 4, name: 'Weapon', cost: 1, spec: false },
    hazard: { draw: 5, green: 5, yellow: 9, red: 14, name: 'Cannibals' },
  },
  {
    ability: {
      fight: 3,
      name: 'Strategy',
      cost: 1,
      spec: {
        type: 'exchange',
        value: 1,
        text: 'Exchange 1 card',
      },
    },
    hazard: { draw: 4, green: 4, yellow: 7, red: 11, name: 'Wild Animals' },
  },
  {
    ability: {
      fight: 3,
      name: 'Vision',
      cost: 1,
      spec: { type: 'sort', value: 3, text: 'Sort 3 cards' },
    },
    hazard: { draw: 4, green: 4, yellow: 7, red: 11, name: 'Wild Animals' },
  },
  {
    ability: {
      fight: 3,
      name: 'Experience',
      cost: 1,
      spec: { type: 'card', value: 1, text: 'draw 1 card' },
    },
    hazard: { draw: 4, green: 4, yellow: 7, red: 11, name: 'Wild Animals' },
  },
  {
    ability: {
      fight: 3,
      name: 'Knowledge',
      cost: 1,
      spec: { type: 'destroy', value: 1, text: 'Destroy 1 card' },
    },
    hazard: { draw: 4, green: 4, yellow: 7, red: 11, name: 'Wild Animals' },
  },
  {
    ability: {
      fight: 2,
      name: 'Repetition',
      cost: 1,
      spec: {
        type: 'double',
        value: 1,
        text: 'Double fighting power of 1 card',
      },
    },
    hazard: {
      draw: 3,
      green: 2,
      yellow: 5,
      red: 8,
      name: 'Explore Deep Into The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Nutritious Food',
      cost: 1,
      spec: { type: 'life', value: 1, text: 'Heal 1 life' },
    },
    hazard: {
      draw: 3,
      green: 2,
      yellow: 5,
      red: 8,
      name: 'Explore Deep Into The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Strategy',
      cost: 1,
      spec: { type: 'exchange', value: 1, text: 'Exchange 1 card' },
    },
    hazard: {
      draw: 3,
      green: 2,
      yellow: 5,
      red: 8,
      name: 'Explore Deep Into The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Vision',
      cost: 1,
      spec: { type: 'sort', value: 3 },
    },
    hazard: {
      draw: 3,
      green: 2,
      yellow: 5,
      red: 8,
      name: 'Explore Deep Into The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Knowledge',
      cost: 1,
      spec: { type: 'destroy', value: 1, text: 'Destroy 1 card' },
    },
    hazard: {
      draw: 3,
      green: 2,
      yellow: 5,
      red: 8,
      name: 'Explore Deep Into The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Experience',
      cost: 1,
      spec: { type: 'card', value: 1, text: 'draw 1 card' },
    },
    hazard: {
      draw: 3,
      green: 2,
      yellow: 5,
      red: 8,
      name: 'Explore Deep Into The Island',
    },
  },
  {
    ability: { fight: 2, name: 'Weapon', cost: 1, spec: false },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: { fight: 2, name: 'Weapon', cost: 1, spec: false },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Nutritious Food',
      cost: 1,
      spec: { type: 'life', value: 1, text: 'Heal 1 life' },
    },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Nutritious Food',
      cost: 1,
      spec: { type: 'life', value: 1, text: 'Heal 1 life' },
    },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Trick',
      cost: 1,
      spec: { type: 'below pile', value: 1 },
    },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Repetition',
      cost: 1,
      spec: {
        type: 'double',
        value: 1,
        text: 'Double fighting power of 1 card',
      },
    },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Knowledge',
      cost: 1,
      spec: { type: 'destroy', value: 1, text: 'Destroy 1 card' },
    },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Mimicry',
      cost: 1,
      spec: {
        type: 'copy',
        value: 1,
        text: 'Copy the ability of another card',
      },
    },
    hazard: {
      draw: 2,
      green: 1,
      yellow: 3,
      red: 6,
      name: 'Explore The Island',
    },
  },
  {
    ability: {
      fight: 2,
      name: 'Strategy',
      cost: 1,
      spec: { type: 'exchange', value: 2, text: 'Exchange 2 cards' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Strategy',
      cost: 1,
      spec: { type: 'exchange', value: 2, text: 'Exchange 2 cards' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Equipement',
      cost: 1,
      spec: { type: 'card', value: 2, text: 'draw 2 cards' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Equipement',
      cost: 1,
      spec: { type: 'card', value: 2, text: 'draw 2 cards' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Nutritious Food',
      cost: 1,
      spec: { type: 'life', value: 1, text: 'Heal 1 life' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Nutritious Food',
      cost: 1,
      spec: { type: 'life', value: 1, text: 'Heal 1 life' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Mimicry',
      cost: 1,
      spec: {
        type: 'copy',
        value: 1,
        text: 'Copy the ability of another card',
      },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Knowledge',
      cost: 1,
      spec: { type: 'destroy', value: 1, text: 'Destroy 1 card' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Trick',
      cost: 1,
      spec: {
        type: 'below pile',
        value: 1,
        text: 'You may place 1 card at the bottom of your pile',
      },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
  {
    ability: {
      fight: 2,
      name: 'Reader',
      cost: 1,
      spec: { type: 'step', value: -1, text: 'Reduce hazard level by 1' },
    },
    hazard: { draw: 1, green: 0, yellow: 1, red: 3, name: 'Explore The Wreck' },
  },
];

const pirates = [
  { draw: 6, fight: 20, spec: false },
  { draw: 7, fight: 25, spec: false },
  { draw: 8, fight: 30, spec: false },
  { draw: 9, fight: 35, spec: false },
  { draw: 10, fight: 40, spec: false },
  { draw: 0, fight: 0, spec: 'hazard' },
  { draw: 5, fight: 0, spec: 'double' },
  { draw: 7, fight: 16, spec: 'double life' },
  { draw: 9, fight: 22, spec: 'half' },
  { draw: 10, fight: 52, spec: 'point' },
];

module.exports = {
  start,
  age_young,
  age_old,
  hazards,
  pirates,
};
