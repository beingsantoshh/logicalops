import "./styles.css";
import { useState } from "react";

export default function App() {
  const name = ["constant", "arguement", "and", "or"];
  const innerOption = {
    constant: ["true", "false"],
    arguement: ["My Arg"]
  };

  const [showInput, setShowInput] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [option1, setOption1] = useState("false");
  const [option2, setOption2] = useState("false");
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState();

  const handleButton = () => {
    setShowInput(!showInput);
  };
  const handleOption1 = (e) => {
    setOption1(e.target.value);
  };

  const handleOption2 = (e) => {
    setOption1(e.target.value);
  };

  const handleClear = () => {};

  return (
    <div className="App">
      <h1>Logical Operator</h1>
      <input type="text" placeholder="My Arg" value="My Arg" />
      <select value={option1} onChange={handleOption1}>
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <br />
      <button onClick={handleButton}>+ add arg</button>
      {showInput && (
        <div>
          <input type="text" />
          <select value={option2} onChange={handleOption2}>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
      )}
      <br />
      <br />

      <select
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        {name.map((state) => {
          return <option>{state}</option>;
        })}
      </select>

      <button onClick={handleClear}>x</button>
      <br />
      <br />

      <h4>result: </h4>
      {result ? <h4>true</h4> : <h4>false</h4>}
    </div>
  );
}
