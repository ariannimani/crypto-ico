import React, { useContext } from "react";
import { useState } from "react";
import { GearFill } from "react-bootstrap-icons";
import { ConfigModal } from "../config-modal/config-modal";
import "./swap.css";
import BeatLoader from "react-spinners/BeatLoader";
import { StateContext } from "../../context/StateProvider";
import { CurrencyField } from "../currency-field/currency-field";
import {
  getEthContract,
  getUniContract,
  getPrice,
  runSwap,
} from "../../alpha-router-service/alpha-router-service";

export const Swap = () => {
  const { signerAddress, ethAmountState, uniAmountState } =
    useContext(StateContext);
  const [slippageAmount, setSlippageAmount] = useState(2);
  const [deadlineMinutes, setDeadlineMinutes] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);
  const [transaction, setTransaction] = useState(0);
  const [loading, setLoading] = useState(0);
  const [ratio, setRatio] = useState();
  const [uniContract, setUniContract] = useState(0);
  const [uniAmount, setUniAmount] = useState(0);

  const getSwapPrice = (inputAmount) => {
    setLoading(true);
    setInputAmount(inputAmount);

    const swap = getPrice(
      inputAmount,
      slippageAmount,
      Math.floor(Date.now() / 1000 + deadlineMinutes * 60),
      signerAddress
    ).then((data) => {
      setTransaction(data[0]);
      setOutputAmount(data[1]);
      setRatio(data[2]);
      setLoading(false);
    });
  };

  return (
    <div className="appBody">
      <div className="token-details text-center">
        <div className="swapHeader">
          <span className="swapText">Swap</span>
          <span
            className="gearContainer"
            onClick={() => setShowModal(!showModal)}
          >
            <GearFill />
          </span>
          {showModal && (
            <ConfigModal
              onClose={() => setShowModal(false)}
              setDeadlineMinutes={setDeadlineMinutes}
              deadlineMinutes={deadlineMinutes}
              setSlippageAmount={setSlippageAmount}
              slippageAmount={slippageAmount}
            />
          )}
        </div>
        <div className="swapBody">
          <CurrencyField
            field="input"
            tokenName="ETH"
            getSwapPrice={getSwapPrice}
            signer={signerAddress}
            balance={ethAmountState.amount}
          />
          <CurrencyField
            field="output"
            tokenName="UNI"
            value={outputAmount}
            signer={signerAddress}
            balance={uniAmountState.amount}
            spinner={BeatLoader}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};
