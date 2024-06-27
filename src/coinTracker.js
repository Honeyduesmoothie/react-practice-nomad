import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("");
  const [money, setMoney] = useState(0);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((data) => data.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const handleInput = (event) => {
    setMoney(event.target.value);
  };
  const handleSelect = (event) => {
    const index = event.target.value;
    if (index !== "") {
      setCoin(coins[index]);
      console.log(coin);
    }
  };
  return (
    <div>
      <h1>Coin Tracker!</h1>
      <h3>{loading ? "Loading..." : ""}</h3>
      {loading ? (
        ""
      ) : (
        <div>
          <select onChange={handleSelect}>
            <option value={""}>Select a coin</option>
            {coins.map((coin, index) => (
              <option key={index} value={index}>
                {coin.name} ${parseFloat(coin.quotes.USD.price).toFixed(2)} USD
              </option>
            ))}
          </select>

          <div>
            <h3>How many coins I can buy?</h3>
            <label>Enter your budget($): </label>
            <input value={money} type="number" onChange={handleInput} />
            {coin === "" ? (
              ""
            ) : (
              <p>
                You can buy {money / coin.quotes.USD.price} {coin.name}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
