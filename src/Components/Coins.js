import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24H</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {props.coins.map((coin) => (
          <Link to={`/coin/${coin.id}`} key={coin.id} element={<Coin />}>
            <CoinItem coin={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Coins;
