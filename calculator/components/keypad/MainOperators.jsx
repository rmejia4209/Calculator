import CalcButton from "./CalcButton";

export default function MainOperators({equation, setEquation, lastAns}) {
  
  const action = (operator) => {
    const lastVal = equation[equation.length - 1];
    const isNum = lastVal === "." ? true : !isNaN(Number(lastVal));
    const newEq = [...equation];

    switch (operator) {
      case "-":
        // Can be placed 1st and can be repeated multiple times
        newEq.push(operator)
        break;
      case "(":
        // Can only be placed after a non-number or 1st in the list
        if (!lastVal || !isNum) newEq.push(operator);
        break;
      case ")":
        // Can only be placed after a number and must have a matching "("
        if (isNum || lastVal === ")") {
          const numOpening = equation.filter(t => t === "(").length;
          const numClosing = equation.filter(t => t === ")").length;
          if (numOpening > numClosing) newEq.push(operator);
        }
        break;
      default:
        // ÷, x, + must be between two numbers and cannot be first
        if (lastVal) {
          if (isNum || lastVal === ")") newEq.push(operator);
        } else if (lastAns != null) {
          newEq.push(lastAns, operator);
        }
        break;
    }
    setEquation(newEq);
  }

  const topOperators = ["(", ")"];
  const sideOperators = ["÷", "x", "-", "+"];
  
  return (
    <>
      <div 
        className="
          grid grid-cols-subgrid 
          col-start-2 col-end-5 row-start-1 row-end-2 gap-2
        "
      >
        {topOperators.map((operand, idx) => (
          <CalcButton key={idx} val={operand} action={action} type={"btn-neutral"}/>
        ))}
      </div>

      <div 
        className="
          grid grid-cols-subgrid 
          col-start-4 col-end-5 row-start-1 row-end-5 gap-2
        "
      >
        {sideOperators.map((operand, idx) => (
          <CalcButton key={idx} val={operand} action={action} type={"btn-neutral"}/>
        ))}
      </div>
    </>

  );
}