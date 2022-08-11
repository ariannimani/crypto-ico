import { ETH_CONTRACT } from "../actions/actions";

const ethContractReducer = (state, action) => {
  switch (action.type) {
    case ETH_CONTRACT: {
      return { ...state, contract: action.payload.ethContract };
    }
    default:
      return state;
  }
};

export default ethContractReducer;
