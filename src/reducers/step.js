const stepDefaultState = 1;

const stepReducer = (state = stepDefaultState, action) => {
  switch (action.type) {
    case "SET_STEP":
      if(Number.isFinite(action.step)) {
        return action.step;
      } else {
        return state;
      }
    default:
      return state;
  }
}


export default stepReducer;