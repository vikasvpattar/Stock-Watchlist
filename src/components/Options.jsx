import React from "react";

const Options = ({ symbol, price, handleClick, sign = "+", myKey }) => {
  return (
    <div className="options" key={myKey}>
      <div className="stockName">{symbol}</div>
      <div className="stockPrice">{price}</div>
      <div className="add" onClick={() => handleClick(symbol, price)}>
        {sign}
      </div>
    </div>
  );
};

export default Options;
