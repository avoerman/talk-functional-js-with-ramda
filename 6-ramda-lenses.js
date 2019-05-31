import * as R from 'ramda';

const point = { x: 2, y: 3 };
const lensAtX = R.lensProp('x');

R.view(lensAtX, point); // ?
R.set(lensAtX, 10, point); // ?
R.over(lensAtX, v => v + '!', point); // ?

const plot = {
  label: 'my chart',
  points: [{ x: 0, y: 1 }, { x: 2, y: 3 }]
};

const lens = R.lensPath(['points', 1, 'x']);

R.view(lens, plot); // ?
R.set(lens, 99, plot); // ?

// const add100 = x => x + 100;
const add100 = R.add(R.__, 100);

R.over(lens, add100, plot); // ?
