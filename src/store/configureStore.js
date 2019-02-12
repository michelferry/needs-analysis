import {createStore, combineReducers} from "redux";
import answersReducer from "../reducers/answers";
import stepReducer from "../reducers/step";

export default () => {
  const store = createStore(
    combineReducers({
      answers: answersReducer,
      step: stepReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}