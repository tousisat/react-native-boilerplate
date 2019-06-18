import * as actionTypes from "../actions/actionsType";

const initialState = {
  counter: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.RESET_COUNTER:
      return {
        ...state,
        counter: 0
      };
    case actionTypes.ADD_TO_COUNTER:
      return {
        ...state,
        counter: state.counter + action.number
      };
    default:
      return state;
  }
};

export default reducer;
