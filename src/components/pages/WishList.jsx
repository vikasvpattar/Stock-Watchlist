import React, { useEffect, useState } from "react";
import Options from "../Options";

const WishList = () => {
  // To sore the extracted data from localStorage
  const [data, setData] = useState([]);
  useEffect(() => {
    // wishListData is extracted from localStorage
    const data = JSON.parse(localStorage.getItem("data"));
    // wishListData is stored in data State
    data.map((res) => setData((prev) => [res, ...prev]));
  }, []);

  const removeItem = () => {};

  return (
    <div className="wishList">
      <h1>wishList</h1>
      {data.map((res) => (
        <Options symbol={res.symbol} price={res.price} sign="-" />
      ))}
    </div>
  );
};

export default WishList;
