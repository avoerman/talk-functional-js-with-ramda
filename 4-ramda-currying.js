import * as R from 'ramda';

R.add(1, 2); // ?

R.add(1); // ?

R.add(1)(2); // ?

const stuff = ['a','b','c','d']

R.insert(1, 'x', stuff); // ?

R.insert(1); // ?

R.insert(1)('x'); // ?
R.insert(1)('x')(stuff); // ?

const insertXat1 = R.insert(1, 'x');

insertXat1(stuff); // ?

const insertXintoStuffAtIndex = R.insert(R.__, 'x', stuff);

insertXintoStuffAtIndex(2) // ?
