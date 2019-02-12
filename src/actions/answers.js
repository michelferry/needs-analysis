const addAnswer = ({parent="", name="", value=""} = {}) => ({
  type: "ADD_ANSWER",
  answer: {
    parent,
    name,
    value: value
  }
});


export {addAnswer};