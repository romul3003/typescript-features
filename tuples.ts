const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

/*
Tuples - array like structure where each element
represents some property of a record
*/

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['clear', false, 0];
