const items = ['chips', 'taco', 'burrito', 'eggs'];

const fourLetterWordsWithFor = items => {
  let newItems = '';

  items.forEach(item => {
    if (item.length === 4) {
      item = item.toUpperCase() + '!!';
      newItems = newItems + ' ' + item;
    }
  });

  return newItems;
};

fourLetterWordsWithFor(items); // ?

const emphasize = item => item.toUpperCase() + '!!';

const fourLetterWords = items => {
  return items
    .filter(item => item.length === 4)
    .map(emphasize)
    .reduce((prev, curr) => prev + ' ' + curr, '');
};

fourLetterWords(items); // ?
