import { useReducer } from "react";
import { createContext } from "react";
import providerReducer from "./reducers/providerReducer";
import signerReducer from "./reducers/signerReducer";
import signerAddressReducer from "./reducers/signerAddressReducer";
import providerInitialState from "./initialStates/providerInitialState";
import signerInitialState from "./initialStates/signerInitialState";
import signerAddressInitialState from "./initialStates/signerAddressInitialState";
import ethContractReducer from "./reducers/ethContractReducer";
import ethContractInitialState from "./initialStates/ethContractInitialState";
import ethAmountReducer from "./reducers/ethAmountReducer";
import ethAmountInitialState from "./initialStates/ethAmountInitialState";
import uniContractReducer from "./reducers/uniContractReducer";
import uniContractInitialState from "./initialStates/uniContractInitialState";
import uniAmountReducer from "./reducers/uniAmountReducer";
import uniAmountInitialState from "./initialStates/uniAmountInitialState";

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

  const [ethContractState, ethContractDispatch] = useReducer(
    ethContractReducer,
    ethContractInitialState
  );

  const [ethAmountState, ethAmountDispatch] = useReducer(
    ethAmountReducer,
    ethAmountInitialState
  );

  const [uniContractState, uniContractDispatch] = useReducer(
    uniContractReducer,
    uniContractInitialState
  );

  const [uniAmountState, uniAmountDispatch] = useReducer(
    uniAmountReducer,
    uniAmountInitialState
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
        ethContractDispatch,
        ethContractState,
        ethAmountState,
        ethAmountDispatch,
        uniContractState,
        uniContractDispatch,
        uniAmountState,
        uniAmountDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
