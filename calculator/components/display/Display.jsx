import CurrentEquation from "./CurrentEquation";
import PreviousEquation from "./PreviousEquation";
import 'katex/dist/katex.min.css';



export default function Display({equation, history, lastAns}){

  return (
      <div className="flex flex-grow w-[96%] xsm:w-96 my-2">
        <div
        className="
          flex flex-col
          w-full
          rounded-lg border truncate
        "
      >
        <PreviousEquation
          history={history}
          excludeAns={!Boolean(equation.length)}
        />
        <CurrentEquation
          equation={equation}
          lastAns={lastAns}/>
      </div>

      </div>
      
    
  );
}