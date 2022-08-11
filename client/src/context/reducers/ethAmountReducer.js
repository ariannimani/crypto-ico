import { SET_ETH_AMOUNT } from "../actions/actions";

export const ethAmountReducer = (state, action) => {
  switch (action.type) {
    case SET_ETH_AMOUNT: {
      return { ...state, amount: action.payload.amount };
    }
    default:
      return state;
  }
};

export default ethAmountReducer;
