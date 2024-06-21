import { createStore } from "redux";
const Initial_value = { counter: 0, privacy: false };
const counterReducer = (store = Initial_value, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }

  return store;
};

const counterStore = createStore(counterReducer);
export default counterStore;
