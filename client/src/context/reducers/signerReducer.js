import { SET_SIGNER } from "../actions/actions";

const signerReducer = (state, action) => {
  switch (action.type) {
    case SET_SIGNER: {
      return {
        ...state,
        signer: action.payload.signer,
        isConnected: action.payload.isConnected,
      };
    }
    default:
      return state;
  }
};

export default signerReducer;
