import {View, Text} from 'react-native';
import React from 'react';

const recipes = [
  {
    id: 1,
    name: 'Scrambled Egg',
    ingredients: ['Egg', 'Salt', 'Peper'],
    step: [
      'Step 1. Whisk Eggs: Beat eggs in a bowl until blended. Add 3/4 tsp salt and pepper.',
      'Step 2. Heat Pan: Melt butter in a nonstick pan over medium-low heat, ensuring it doesn’t brown.',
      'Step 3. Cook Eggs: Pour eggs into the pan and let them slightly set. Lower heat if they cook too fast.',
      'Step 4. Scramble: Stir constantly with a spatula to cook evenly. Use gentle heat for creamy texture.',
      'Step 5. Add Mix-Ins: Add herbs, ham, or cheese as eggs set. Toast bread if desired.',
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
