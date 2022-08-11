import { SET_UNI_AMOUNT } from "../actions/actions";

export const uniAmountReducer = (state, action) => {
  switch (action.type) {
    case SET_UNI_AMOUNT: {
      return { ...state, amount: action.payload.amount };
    }
    default:
      return state;
  }
};

export default uniAmountReducer;
