import { SET_PROVIDER } from "../actions/actions";

const providerReducer = (state, action) => {
  switch (action.type) {
    case SET_PROVIDER: {
      return { ...state, provider: action.payload.provider };
    }
    default:
      return state;
  }
};

export default providerReducer;
