import NumberPad from "./NumberPad";
import Operands from "./Operands";
import AllClear from "./actions/AllClear";
import Equals from "./actions/Equals";

export default function KeyPad({lastAns, equation, setEquation}) {
  return (
    <div className="max-w-fit grid grid-cols-4 grid-rows-5 gap-5 w-full">
    <AllClear />
    <Operands equation={equation} setEquation={setEquation}/>
    <NumberPad lastAns={lastAns} equation={equation} setEquation={setEquation}/>
    <Equals />

    </div>
  );
}