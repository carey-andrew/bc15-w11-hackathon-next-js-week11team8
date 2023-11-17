export default function Form() {
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
