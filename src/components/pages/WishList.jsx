import React, { useEffect, useState } from "react";
import Options from "../Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishList = () => {
  // To sore the extracted data from localStorage
  const [data, setData] = useState([]);
  const [removeData, setRemoveData] = useState([]);
  useEffect(() => {
    // wishListData is extracted from localStorage
    const storedData = JSON.parse(localStorage.getItem("data"));
    setData(storedData);
  }, []);

  const removeItem = (symbol) => {
    const updatedArray = data.filter((item) => item.symbol !== symbol);
    setData(updatedArray);
    toast.success("removed from the wishList successfully");
    localStorage.setItem("data", JSON.stringify(updatedArray));
  };

  return (
    <div className="wishList">
      <h1>wishList</h1>
      {data &&
        data.map((res, index) => (
          <Options
            key={index}
            myKey={index}
            symbol={res.symbol}
            price={res.price}
            handleClick={removeItem}
            sign="-"
          />
        ))}
      <ToastContainer />
    </div>
  );
};

export default WishList;
