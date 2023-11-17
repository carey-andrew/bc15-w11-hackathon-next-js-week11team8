
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

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  // a function that will handle the input change and the currency selection
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // a function that will handle the currency convertion

  return (
    <form>
      <label>Add amount £ </label>
      <input></input>

      <select
        name="currency"
        id="currency"
        value={currencySelection}
        onChange={handleChange}
      >

        <option value="euro">EUR -Euro</option>
        <option value="us dollar">USD -US dollar</option>
        <option value="canadian dollar">CAD -Canadian dollar</option>
        <option value="australian dollar">AUD -Australian dollar</option>
        <option value="indian rupee">INR -Indian rupee</option>
      </select>
    </form>
  );
}
