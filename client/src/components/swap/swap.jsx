import React, { useContext } from "react";
import { useState } from "react";
import { GearFill } from "react-bootstrap-icons";
import { ConfigModal } from "../config-modal/config-modal";
import "./swap.css";
import BeatLoader from "react-spinners/BeatLoader";
import { StateContext } from "../../context/StateProvider";
import { CurrencyField } from "../currency-field/currency-field";

export const Swap = () => {
  const { signerAddress } = useContext(StateContext);
  const [slippageAmount, setSlippageAmount] = useState(2);
  const [deadlineMinutes, setDeadlineMinutes] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);
  const [outputAmount, setOutputAmount] = useState(0);
  const [transaction, setTransaction] = useState(0);
  const [loading, setLoading] = useState(0);
  const [ratio, setRatio] = useState();
  const [ethContract, setEthContract] = useState(0);
  const [uniContract, setUniContract] = useState(0);
  const [ethAmount, setEthAmount] = useState(0);
  const [uniAmount, setUniAmount] = useState(0);

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
            //getSwapPrice={getSwapPrice}
            signer={signerAddress}
            balance={ethAmount}
          />
          <CurrencyField
            field="input"
            tokenName="UNI"
            value={outputAmount}
            signer={signerAddress}
            balance={ethAmount}
            spinner={BeatLoader}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};
