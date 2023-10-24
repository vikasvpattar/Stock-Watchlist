# FOR DEMO - https://astonishing-muffin-c862b3.netlify.app/

#WORKING
-The user of this website can look up stock prices and put them on their wish list.

-For the front end of my project, I used React JS and local storage to store data.
I used the Alpha Vantage Search Endpoint API (https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo) to search for the stock price. By using this, I was able to obtain the company's symbols, which I then substituted into the Alpha Vantage Qoute End Point API (https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo) to obtain the stock name and price.

-Suggestions appear when a user tries to search automatically in the input box.

-You can add items to your wishlist by clicking the + sign, and the items will be saved locally.

-You can see the stocks added to local storage when you navigate to the wishlist section.
