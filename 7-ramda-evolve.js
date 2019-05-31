import * as R from 'ramda';

const ogState = {
  cartId: 10,
  stepTitle: 'Review Cart',
  currentStep: 3
};

// const toNextPage = (state, newTitle) => {
//   state.currentStep++;
//   state.stepTitle = newTitle
//   return state;
// };

const updateTitle = newTitle => R.assoc('stepTitle', newTitle);

const incrementStep = R.evolve({
  currentStep: val => R.inc(val)
});

const toNextPage = (state, newTitle) =>
  R.call(
    R.pipe(
      incrementStep,
      updateTitle(newTitle)
    ),
    state
  );

toNextPage(ogState, 'Pay for your stuff'); // ?
