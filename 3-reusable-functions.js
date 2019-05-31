import * as R from 'ramda';

const items = ['chips', 'taco', 'burrito', 'eggs'];

const emphasize = item => item.toUpperCase() + '!!';

const filterFours = R.filter(item => item.length === 4);
const emphasizeAll = R.map(emphasize);
const combineWithSpace = R.reduce((prev, curr) => prev + ' ' + curr, '');

const fourLetterWordsMapFilterReduce = items => {
  return items
    .filter(item => item.length === 4)
    .map(item => emphasize(item))
    .reduce((prev, curr) => prev + ' ' + curr, '');
};

const fourLetterWordsMapNoPipe = items => {
  return combineWithSpace(emphasizeAll(filterFours(items)));
};

const fourLetterWords = R.pipe(
  filterFours,
  emphasizeAll,
  combineWithSpace
);

fourLetterWords(items); // ?

R.pipe(fourLetterWords, R.toLower)(items) // ?
