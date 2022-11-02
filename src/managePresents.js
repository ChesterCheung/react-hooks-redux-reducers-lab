const initialState = { numberOfPresents: 0 };
const action = {
  type: "presents/increase,"
};

export function managePresents(state = initialState, action) {
  switch (action.type){
    case "presents/increase":
      return {numberOfPresents: state.count + 1}
    default:
        return state;
  }
}
