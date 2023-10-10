import { useState } from "react";
import backgroundImg from "./assets/Images/currency.jpg";
import InputBox from "./components/InputBox";
import GetCurrency from "./hooks/GetCurrency";
import Footer from "./components/Footer";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = GetCurrency(fromCurr);
  const options = Object.keys(currencyInfo);
  console.log(options);

  const amountChange = (currency) => {
    setAmount(currency);
    setConvertedAmount(0);
  };

  const swap = () => {
    setFromCurr(toCurr);
    setToCurr(fromCurr);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertCurrency = () => {
    setConvertedAmount(() => Number(amount) * currencyInfo[toCurr]);
  };

  return (
    <div
      className=" p-8  flex flex-col  items-center justify-between w-100% h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="p-4">
        <h1 className=" text-6xl text-white font-bold">Currency Converter</h1>
      </div>
      <div className="w-[50%] backdrop-blur-2xl rounded-lg flex flex-col gap-8 border-2 p-8 m-2 h-[60%]">
        <div className=" mt-1 px-4 h-[40%] rounded-lg bg-white border-2 p-2">
          <InputBox
            label="From"
            selectCurr={fromCurr}
            curr={fromCurr}
            amount={amount}
            amountChange={amountChange}
            options={options}
            setFrom={setFromCurr}
          />
        </div>
        <button
          onClick={swap}
          className="bg-blue-700 flex justify-center border-2 w-[15%] text-white text-[98%] font-bold p-4 text-base rounded-lg absolute top-[34%] left-[43%]"
        >
          Swap
        </button>
        <div className=" mt-1 h-[40%] px-4 rounded-lg bg-white border-2  p-2">
          <InputBox
            label="To"
            curr={toCurr}
            selectCurr={toCurr}
            amount={convertedAmount}
            options={options}
            setFrom={setToCurr}
          />
        </div>
        <button
          onClick={convertCurrency}
          className=" text-white text-lg font-semibold mt-1 rounded-lg bg-blue-700 border-2 p-1"
        >
          Convert {fromCurr.toUpperCase()} to {toCurr.toUpperCase()}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
