import * as R from 'ramda';

const catalog = {
  books: [
    {
      id: 1,
      title: 'Clean Code',
      author: {
        id: 15,
        name: 'Bob Martin'
      }
    },
    {
      id: 2,
      title: 'Clean Architecture',
      author: {
        id: 15,
        name: 'Bob Martin'
      }
    },
    {
      id: 3,
      title: 'JavaScript the Good Parts',
      author: {
        id: 16,
        name: 'Douglas Crockford'
      }
    }
  ],
  comics: []
};

const getBooks = R.prop('books'); // ?
const getAuthorName = R.path(['author', 'name']);
const allAuthorNames = R.map(getAuthorName);

const uniqueAuthors = R.pipe(
  getBooks,
  allAuthorNames,
  R.uniq
);

uniqueAuthors(catalog); // ?

R.join('... ', uniqueAuthors(catalog)); // ?

const noBob = R.reject(
  R.pipe(
    R.toUpper,
    R.includes('BOB')
  )
);

R.pipe(
  uniqueAuthors,
  noBob
)(catalog); // ?
