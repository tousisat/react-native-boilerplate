import * as actionTypes from "./actionsType";

export const onIncrementCounter = () => {
  return {
    type: actionTypes.INCREMENT_COUNTER
  };
};
export const onAddToCounter = number => {
  return {
    type: actionTypes.ADD_TO_COUNTER,
    number: number
  };
};
