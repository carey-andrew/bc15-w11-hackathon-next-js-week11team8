// importing useState, useEffect for fetching data
import { useState, useEffect } from "react";
export default function Form() {
  // 1. When the user inputs a number and then selects a currency, the amount should be displayed and vice-versa
  // initial state of input is 0
  const [input, setInput] = useState(0);
  // initial state of currency is EUR
  const [currencySelection, setCurrencySelection] = useState("EUR -Euro");
  // a function that will handle the input change and the currency selection
  // a function that will handle the currency convertion
  return (
    <form>
      <label>Add amount £ </label>
      <input></input>
      <select name="currency" id="currency">
        <option value="euro">EUR -Euro</option>
        <option value="us dollar">USD -US dollar</option>
        <option value="canadian dollar">CAD -Canadian dollar</option>
        <option value="australian dollar">AUD -Australian dollar</option>
        <option value="indian rupee">INR -Indian rupee</option>
      </select>
    </form>
  );
}
