import OperandButton from "./OperandButton";


export default function Operands({equation, setEquation, lastAns}) {
  
  const action = (operand) => {
    const lastVal = equation[equation.length - 1];
    const isNum = lastVal === "." ? true : !isNaN(Number(lastVal));
    const newEq = [...equation];

    switch (operand) {
      case "-":
        // Can be placed 1st and can be repeated multiple times
        newEq.push(operand)
        break;
      case "(":
        // Can only be placed after a non-number or 1st in the list
        if (!lastVal || !isNum) newEq.push(operand);
        break;
      case ")":
        // Can only be placed after a number and must have a matching "("
        if (isNum || lastVal === ")") {
          const numOpening = equation.filter(t => t === "(").length;
          const numClosing = equation.filter(t => t === ")").length;
          if (numOpening > numClosing) newEq.push(operand);
        }
        break;
      default:
        // ÷, x, + must be between two numbers and cannot be first
        if (lastVal) {
          if (isNum || lastVal === ")") newEq.push(operand);
        } else if (lastAns != null) {
          newEq.push(lastAns, operand);
        }
        break;
    }
    setEquation(newEq);
  }

  const topOperands = ["(", ")"];
  const sideOperands = ["÷", "x", "-", "+"];
  
  return (
    <>
      <div 
        className="grid grid-cols-subgrid col-start-2 col-end-5 row-start-1
          row-end-2 gap-5"
      >
        {topOperands.map((operand, idx) => (
          <OperandButton key={idx} operand={operand} action={action}/>
        ))}
      </div>

      <div 
        className="grid grid-cols-subgrid col-start-4 col-end-5 row-start-1
          row-end-5 gap-5"
      >
        {sideOperands.map((operand, idx) => (
          <OperandButton key={idx} operand={operand} action={action}/>
        ))}
      </div>
    </>

  );
}