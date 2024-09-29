


export default function OperandButton({operand, action}) {

  return (
    <button 
      className="btn btn-square btn-neutral btn-lg text-xl col-span-1"
      onClick={()=>{action(operand)}}
    >
    {operand}
  </button>
  );

}