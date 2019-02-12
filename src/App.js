import React from "react";
import {Provider} from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

const store = configureStore();

/*
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})
*/

const App = (props) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App;
