import {View, Text} from 'react-native';
import React from 'react';

const recipes = [
  {
    id: 1,
    name: 'Scrambled Egg',
    ingredients: ['Egg', 'Salt', 'Pepper'],
    step: [
      'Whisk Eggs: Beat eggs in a bowl until blended. Add 3/4 tsp salt and pepper.',
      'Heat Pan: Melt butter in a nonstick pan over medium-low heat, ensuring it doesn’t brown.',
      'Cook Eggs: Pour eggs into the pan and let them slightly set. Lower heat if they cook too fast.',
      'Scramble: Stir constantly with a spatula to cook evenly. Use gentle heat for creamy texture.',
      'Add Mix-Ins: Add herbs, ham, or cheese as eggs set. Toast bread if desired.',
    ],
    image: require('./img/scrambled-egg.jpg'),
  },

  {
    id: 2,
    name: 'Scrambled Egg',
    ingredients: ['Egg', 'Salt'],
  },
  {
    id: 3,
    name: 'Pancakes',
    ingredients: ['Flour', 'Milk', 'Egg', 'Sugar'],
  },
  {
    id: 4,
    name: 'Sunny Side Up',
    ingredients: ['Egg', 'Salt'],
  },
];

export default recipes;
