import React from "react";
import "./currency-field.css";
export const CurrencyField = (props) => {
  const getPrice = (value) => {
    props.getSwapPrice(value);
  };
  return (
    <div className="row currencyInput">
      <div className="col-md-6 numberContainer">
        {props.loading ? (
          <div className="spinnerContainer">
            <props.spinner />
          </div>
        ) : (
          <input
            type="text"
            className="currencyInputField"
            placeholder="0.0"
            value={props.value}
            onChange={(e) =>
              props.field === "input" && e.target.value > 0
                ? getPrice(e.target.value)
                : null
            }
          />
        )}
      </div>
      <div className="col-md-6 tokenContainer">
        <span className="tokenName">{props.tokenName}</span>
        <div className="balanceContainer">
          <span className="balanceAmount">
            Balance: {props.balance.toFixed(3)}
          </span>
        </div>
      </div>
    </div>
  );
};
