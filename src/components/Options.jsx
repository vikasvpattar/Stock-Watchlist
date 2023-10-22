import React from "react";

const Options = ({ symbol, price, handleClick, sign = "+" }) => {
  return (
    <div className="options">
      <div className="stockName">{symbol}</div>
      <div className="stockPrice">{price}</div>
      <div className="add" onClick={() => handleClick(symbol, price)}>
        {sign}
      </div>
    </div>
  );
};

export default Options;
