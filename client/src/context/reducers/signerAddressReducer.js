import { SET_SIGNER_ADDRESS } from "../actions/actions";

const signerAddressReducer = (state, action) => {
  switch (action.type) {
    case SET_SIGNER_ADDRESS: {
      return {
        ...state,
        signerAddress: action.payload.signerAddress,
        isConnected: action.payload.isConnected,
      };
    }
    default:
      return state;
  }
};

export default signerAddressReducer;
