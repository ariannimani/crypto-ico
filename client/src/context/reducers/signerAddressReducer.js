import { SET_SIGNER_ADDRESS } from "../actions/actions";

const signerAddressReducer = (state, action) => {
  switch (action.type) {
    case SET_SIGNER_ADDRESS: {
      return {
        ...state,
        signerAddress: action.playload.signerAddress,
        isConnected: action.playload.isConnected,
      };
    }
    default:
      return state;
  }
};

export default signerAddressReducer;
