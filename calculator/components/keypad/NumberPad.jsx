'use client'
import CalcButton from "./CalcButton";


export default function NumberPad({lastAns, equation, setEquation}) {


  const action = (val) => {
    const lastVal = equation.pop(-1);
    const isNum = lastVal === "." ? true : !isNaN(Number(lastVal));
    
    const newEq = [...equation];
    if (!isNum || !lastVal) {
      if (lastVal) newEq.push(lastVal);
      val === "ans" && lastAns ? newEq.push(lastAns) : newEq.push(val);
    } else {
      const newVal = lastVal + val;
      !isNaN(Number(newVal)) ? newEq.push(newVal) : newEq.push(lastVal);
    }
    setEquation(newEq);
  }

  const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "ans", "0", "."];
  
 
  return (
    <div
      className="
        grid grid-cols-subgrid 
        col-start-1 col-end-4 row-start-2 row-end-6
        gap-2
      "
    >
      {nums.map((num, idx) => (
        <CalcButton key={idx} val={num} action={action}/>
      ))}
    </div>
  );
 


}