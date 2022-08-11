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
import {
  SET_ETH_AMOUNT,
  SET_SIGNER,
  SET_SIGNER_ADDRESS,
  SET_UNI_AMOUNT,
} from "./actions/actions";
import { ethers } from "ethers";

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

  const getWalletAddress = () => {
    signerState.signer.getAddress().then((address) => {
      signerAddressDispatch({
        type: SET_SIGNER_ADDRESS,
        payload: { signerAddress: address, isConnected: true },
      });

      // connect weth and uni contracts
      ethContractState.contract.balanceOf(address).then((res) =>
        ethAmountDispatch({
          type: SET_ETH_AMOUNT,
          payload: { amount: Number(ethers.utils.formatEther(res)) },
        })
      );
      uniContractState.contract.balanceOf(address).then((res) =>
        uniAmountDispatch({
          type: SET_UNI_AMOUNT,
          payload: { amount: Number(ethers.utils.formatEther(res)) },
        })
      );
    });
  };

  const getSigner = async (provider) => {
    provider.provider.send("eth_requestAccounts", []);
    const signer = provider.provider.getSigner();
    signerDispatch({
      type: SET_SIGNER,
      payload: { signer: signer, isConnected: true },
    });
  };

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
        getSigner,
        getWalletAddress,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
