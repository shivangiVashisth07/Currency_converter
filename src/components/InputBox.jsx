import React from "react";

function InputBox(props) {
  return (
    <div div className="flex justify-between">
      <div className="flex  w-[30%] flex-col items-center font-semibold text-gray-400">
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type="text"
          value={props.amount}
          id={props.label}
          onChange={(e) =>
            props.amountChange && props.amountChange(Number(e.target.value))
          }
          className="m-2 w-[36%]  font-semibold text-base text-gray-700 border-gray-200 bg-gray-200 border-2 rounded-lg p-1"
        />
      </div>
      <div className="flex  w-[30%] flex-col items-center font-semibold text-gray-400">
        <h1>Currency Type</h1>
        <select
          onChange={(e) => props.setFrom(e.target.value)}
          value={props.selectCurr}
          className="m-2 w-[36%] font-semibold text-base text-gray-700 border-gray-200 bg-gray-200 border-2 rounded-lg "
        >
          {props.options.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
