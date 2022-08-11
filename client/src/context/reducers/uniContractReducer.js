import { UNI_CONTRACT } from "../actions/actions";

const uniContractReducer = (state, action) => {
  switch (action.type) {
    case UNI_CONTRACT: {
      return { ...state, contract: action.payload.uniContract };
    }
    default:
      return state;
  }
};

export default uniContractReducer;
