// importing useState, useEffect for fetching data
"use client";
import { useState } from "react";
//import { useClient } from "next/data-client";
import { initialCurrValue } from "../page.js";

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/1422c9c7818ee8bbfbd312ee/latest/GBP";
export default function Form(props) {
  // 1. When the user inputs a number and then selects a currency, the amount should be displayed and vice-versa
  // initial state of input is 0
  const [input, setInput] = useState(0);
  // initial state of currency is EUR
  const [currencySelection, setCurrencySelection] = useState("EUR -Euro");

  const [conversion, setConversion] = useState(0);

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  // a function that will handle  the currency selection
  const handleCurrencyChange = (e) => {
    const selectedValue = e.target.value;
    setCurrencySelection(selectedValue);
    console.log(selectedValue);
    // console.log(`Target:${target}`);
    // console.log(`Value:${value}`);
  };

  // a function that will handle the number input
  const handleNumberChange = (e) => {
    const selectedValue = e.target.value;
    setInput(selectedValue);
    console.log(selectedValue);
    // console.log(`Target:${target}`);
    // console.log(`Value:${value}`);
  };

  // a function that will handle the currency convertion

  function converter() {
    const conversionRate = 1.5;
    let convertedTotal = handleNumberChange;
    convertedTotal = input * conversionRate;
    console.log(convertedTotal);
    setConversion(convertedTotal);
  }

  // call the convertor function whenever the input or currency selection changes


  return (
    <form>
      <label>Add amount £ </label>
      <input type="number" min="0" onChange={handleNumberChange}></input>

      <select
        name="currency"
        id="currency"
        value={currencySelection}
        onChange={handleCurrencyChange}
      >
        <option value="EUR">EUR -Euro</option>
        <option value="USD">USD -US dollar</option>
        <option value="CAD">CAD -Canadian dollar</option>
        <option value="AUD">AUD -Australian dollar</option>
        <option value="INR">INR -Indian rupee</option>
      </select>
    </form>
  );
}
