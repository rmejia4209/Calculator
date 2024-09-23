'use client'
import NumberButton from "./NumberButton";



export default function NumberPad() {
  
  const calcButtons = [
    {val: "AC", displayVal: "AC", isOperand: false},
    {val: "(", displayVal: "(", isOperand: false},
    {val: ")", displayVal: ")", isOperand: false},
    {val: "/", displayVal: "÷", isOperand: false},
    {val: 9, displayVal: "9", isOperand: false},
    {val: 8, displayVal: "8", isOperand: false},
    {val: 7, displayVal: "7", isOperand: false},
    {val: "*", displayVal: "x", isOperand: false},
    {val: 6, displayVal: "6", isOperand: false},
    {val: 5, displayVal: "5", isOperand: false},
    {val: 4, displayVal: "4", isOperand: false},
    {val: "-", displayVal: "-", isOperand: false},
    {val: 3, displayVal: "3", isOperand: false},
    {val: 2, displayVal: "2", isOperand: false},
    {val: 1, displayVal: "1", isOperand: false},
    {val: "+", displayVal: "+", isOperand: false},
    {val: null, displayVal: "ans", isOperand: false},
    {val: 0, displayVal: "0", isOperand: false},
    {val: ".", displayVal: ".", isOperand: false},
    {val: "=", displayVal: "=", isOperand: false}
  ];

  return (
    <div className="grid grid-cols-4 gap-1">
      {calcButtons.map((calcButton, idx) => (
        calcButton.isOperand ? <p>Hello</p> : <NumberButton calcButton={calcButton} key={idx} />
      ))}
    </div>
  );

}