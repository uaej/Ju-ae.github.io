import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [coinId, setCoinId]= useState("");
  const[result, setResult] = useState("");
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

  const onSelect = (event)=>{
    console.log("onselect");
    console.log(event.target.value);
    var id = event.target.value;
    setCoinId(id);
  }
  const onChange=(event)=>{
    setUsd(event.target.value); 
  }
  const calculate =(event)=>{
    event.preventDefault();
    const data = coins.find(ele => ele.id == coinId);
    let val = 0;
    if(usd > 0){
      val = usd / data.quotes.USD.price;
    }
    setResult(val + "   " + data.name + "(" + data.symbol +")");
  }
  
  return(
    <div>
      <h1> The Coins{loading? "" : `(${coins.length})`}</h1>
      <form onSubmit={calculate}>
        <input onChange={onChange} type="number"></input>
        USD   
        <button>조회</button>
        </form>
      <br/>
      {loading ? <strong>Loading...</strong>
        : 
        <div>
        <select onChange={onSelect}>
          {coins.map((coin)=><option value={coin.id}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
        </select>
          <h2>{result}</h2>
        </div>
      }
    </div>
  );
}

export default App;