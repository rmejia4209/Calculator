import OperandButton from "./OperandButton";



export default function Operands({equation, setEquation}) {
  
  const topOperands = ["(", ")"];
  const action = null;
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