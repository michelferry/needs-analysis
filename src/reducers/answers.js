import {pages} from "../config/formConfig";

//Constructing empty JSON structure to collect user answers
let answers = {};
for (let page of pages){
  answers[page.name] = {};
  for (let prop in page.content){
    let item = page.content[prop];
    if(item.name !== undefined){
      answers[page.name][item.name] = "";
    }
  }
}
const answersReducerDefaultState = answers;

const answersReducer = (state = answersReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      if(action.answer.parent !== "" && action.answer.name !== "") {
        const tempState = Object.assign({}, state);
        tempState[action.answer.parent][action.answer.name] = action.answer.value;
        return tempState;
      } else {
        return state;
      }
    default:
      return state;
  }
}


export default answersReducer;