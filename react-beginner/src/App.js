import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const url= "https://api.coinpaprika.com/v1/tickers";
    fetch(url)
    .then((response)=> response.json())
    .then((json)=> {
      setLoading(false);
      setCoins(json);
    }
    );

  }, []);
  
  return(
    <div>
      <h1> The Coins{loading? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong>
        : 
        <select>
          {coins.map((coin)=><option>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
        </select>
      }
    </div>
  );
}

export default App;