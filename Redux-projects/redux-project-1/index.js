const redux = require("redux");
const Initial_value = { count: 0 };
const reducer = (store = Initial_value, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.count + 1 };
  }
  return newStore;
};

const store = redux.createStore(reducer);
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);
store.dispatch({ type: "INCREMENT" });
