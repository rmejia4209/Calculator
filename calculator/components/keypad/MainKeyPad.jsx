import NumberPad from "./NumberPad";
import MainOperators from "./MainOperators";
import Clear from "./actions/AllClear";
import Equals from "./actions/Equals";

export default function MainKeyPad({
  equation,
  setEquation,
  history,
  setHistory,
  lastAns,
  setLastAns
}) {
  return (
    <div
      className="
        grid grid-cols-4 grid-rows-5 gap-2
        w-[96%] h-fit xsm:w-96 mb-5
        "
      >
      <Clear
        equation={equation}
        setEquation={setEquation}
        setHistory={setHistory}
        setLastAns={setLastAns}
      />
      <MainOperators
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