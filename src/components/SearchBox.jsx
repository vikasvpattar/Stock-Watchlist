import axios from "axios";
import React, { useEffect, useState } from "react";
import Options from "./Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBox = () => {
  // To store the values which are typed by user
  const [search, setSearch] = useState("");
  // To store the suggestions provided by API
  const [searchResults, setSearchResults] = useState([]);
  // To store the wishlist data
  const [wishList, setWishList] = useState([]);
  // To Store Error
  const [err, setErr] = useState("");

  useEffect(() => {
    // setting the searchResult to null
    setSearchResults([]);
    if (search) {
      // Implementing debouncing to efficiently access the API
      let timeOut = setTimeout(
        () =>
          // fetching the data from API
          axios
            .get(
              `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=T84H0I7VDB4K1BA3s`
            )
            .then((symbolResponse) => {
              const symbols = symbolResponse.data.bestMatches.map(
                (res) => res["1. symbol"]
              );
              const dataObj = {};
              if (symbols.length > 0) {
                symbols.map((symbol, index) => {
                  // accessing the data from another API
                  return index < 3
                    ? axios
                        .get(
                          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=T84H0I7VDB4K1BA3s`
                        )
                        .then((result) =>
                          setSearchResults((prev) => [
                            {
                              symbol: result.data["Global Quote"]["01. symbol"],
                              price: result.data["Global Quote"]["05. price"],
                            },
                            ...prev,
                          ])
                        )
                        .catch((err) => {
                          setErr(err);
                          return console.log("error has occured");
                        })
                    : "";
                });
              }
            }),
        1000
      );

      return () => clearTimeout(timeOut);
    }
  }, [search]);

  const handleClick = (symbol, price) => {
    // adding the data to wishlist without repetition
    if (wishList) {
      const data = { symbol, price };
      const isPresent = wishList.some((obj) => obj.symbol === symbol);
      if (!isPresent) {
        setWishList((prevData) => [data, ...prevData]);
        toast.success("added to wishlist successfully..");
      } else {
        toast.warning("It's already in your wishList");
      }
    }
  };
  // useEffect id used to store the wishListed element in LocalStorage
  useEffect(() => {
    if (wishList.length > 0) {
      localStorage.setItem("data", JSON.stringify(wishList));
    }
  }, [wishList]);

  return (
    <div>
      <div className="searchBox">
        <input
          type="text"
          value={search}
          className="search"
          placeholder="Search the stock prices here ...."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="resultTitle">
        <h4>Results :-</h4>
      </div>
      {searchResults &&
        searchResults.map((res, index) => (
          <Options
            key={index}
            myKey={index}
            symbol={res.symbol}
            price={res.price}
            handleClick={handleClick}
          />
        ))}

      {err && (
        <div className="errMsg">
          <h2>Oops Error has occurred</h2>
        </div>
      )}

      <ToastContainer />

      {/* dummy data to check the functionality if the api does't work  */}
      {/* <Options symbol={"tata"} price={1034} handleClick={handleClick} />
      <Options symbol={"jio"} price={102} handleClick={handleClick} />
      <Options symbol={"rel"} price={203} handleClick={handleClick} />
      <Options symbol={"com"} price={101} handleClick={handleClick} /> */}
    </div>
  );
};

export default SearchBox;
