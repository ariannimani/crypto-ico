import { useReducer } from "react";
import { createContext } from "react";
import providerReducer from "./reducers/providerReducer";
import signerReducer from "./reducers/signerReducer";
import signerAddressReducer from "./reducers/signerAddressReducer";
import providerInitialState from "./initialStates/providerInitialState";
import signerInitialState from "./initialStates/signerInitialState";
import signerAddressInitialState from "./initialStates/signerAddressInitialState";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [providerState, providerDispatch] = useReducer(
    providerReducer,
    providerInitialState
  );
  const [signerState, signerDispatch] = useReducer(
    signerReducer,
    signerInitialState
  );
  const [signerAddressState, signerAddressDispatch] = useReducer(
    signerAddressReducer,
    signerAddressInitialState
  );
  return (
    <StateContext.Provider
      value={{
        providerState,
        providerDispatch,
        signerState,
        signerDispatch,
        signerAddressState,
        signerAddressDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
