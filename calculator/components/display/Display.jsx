import ShowHistoryButton from "./ShowHistoryButton";
import CurrentEquation from "./CurrentEquation";
import PreviousEquation from "./PreviousEquation";
import 'katex/dist/katex.min.css';



export default function Display({equation, history, lastAns}){

  return (
      <div className="flex flex-grow w-[96%] xsm:w-96 mt-2 mb-2">
        <div
        className="
          flex flex-col
          w-full
          rounded-lg border truncate
        "
      >
        <div className="flex flex-row" >
          <ShowHistoryButton history={history}/>
          <PreviousEquation
            history={history}
            excludeAns={!Boolean(equation.length)}
          />
        </div>
        
        <CurrentEquation
          equation={equation}
          lastAns={lastAns}/>
      </div>

      </div>
      
    
  );
}