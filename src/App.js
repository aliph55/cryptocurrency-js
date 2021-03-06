import axios from "axios";
import React, { useEffect, useState } from "react";
import Coins from "./Components/Coins";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

    axios
      .get(url)
      .then((responce) => {
        setCoins(responce.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Coins coins={coins} />} path="/" />
        <Route path="/coin/" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
