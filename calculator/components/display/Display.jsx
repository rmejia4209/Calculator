import { buildLaTexString } from "@/utils/symMath";
import CurrentEquation from "./CurrentEquation";
import PreviousEquation from "./PreviousEquation";
import 'katex/dist/katex.min.css';



export default function Display({equation, history, lastAns}){

  const formatEquation = (rawEquation, setDisplay) => {
    const equationString = buildLaTexString(rawEquation);
    setDisplay(equationString);
  }

  return (
    <div className="flex flex-col w-full max-w-full max-h-fit rounded-lg border mb-1 truncate">
      <PreviousEquation
        history={history}
        formatEquation={formatEquation}
        excludeAns={!Boolean(equation.length)}
      />
      <CurrentEquation
        equation={equation}
        formatEquation={formatEquation}
        lastAns={lastAns}/>
    </div>
  );
}