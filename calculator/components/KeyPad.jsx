import NumberPad from "./NumberPad";
import Operands from "./Operands";
import Clear from "./actions/AllClear";
import Equals from "./actions/Equals";

export default function KeyPad({
  equation,
  setEquation,
  history,
  setHistory,
  lastAns,
  setLastAns
}) {
  return (
    <div className="max-w-fit grid grid-cols-4 grid-rows-5 gap-5 w-full">
      <Clear
        equation={equation}
        setEquation={setEquation}
        setHistory={setHistory}
      />
      <Operands
        equation={equation}
        setEquation={setEquation}
        lastAns={lastAns}
      />
      <NumberPad lastAns={lastAns} equation={equation} setEquation={setEquation}/>
      <Equals
        equation={equation} 
        setEquation={setEquation} 
        history={history}
        setHistory={setHistory}
        setLastAns={setLastAns}
      />
    </div>
  );
}