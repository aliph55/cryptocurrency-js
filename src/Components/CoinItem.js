import React from "react";
import "./Coins.css";

const CoinItem = (props) => {
  return (
    <div key={props.coin.id} className="coin-row">
      <p>{props.coin.market_cap_rank}</p>
      <div>
        <img src={props.coin.image} />
        <p>{props.coin.symbol}</p>
      </div>
      <p>{props.coin.price_change_percentage_24h}</p>
      <p className="hide-mobile">{props.coin.total_volume}</p>
      <p className="hide-mobile">{props.coin.market_cap}</p>
    </div>
  );
};

export default CoinItem;
