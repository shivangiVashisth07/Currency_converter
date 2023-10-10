import React, { useEffect, useState } from "react";

function GetCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((resp) => resp.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default GetCurrency;
