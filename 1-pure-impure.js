let cart = {
  orders: [],
  orderTotal: 0,
  startedDate: new Date(),
  userId: 34
};

function addToOrderImpure(order) {
  cart.orders.push(order);
  cart.orderTotal += order.price;
}

function addToOrderImpure2(cartState, order) {
  cartState.orders.push(order);
  cartState.orderTotal += order.price;
  cartState.date = order.date;
  return cartState;
}

function addToOrderPure(cartState, item) {
  return {
    ...cartState,
    orders: [...cartState.orders, item],
    orderTotal: cartState.orderTotal + item.price
  };
}

const newCart1 = addToOrderPure(cart, { name: 'taco', price: 2.5 }); // ?
const newCart2 = addToOrderPure(newCart1, { name: 'taco', price: 2.5 }); // ?

console.log(newCart2);
