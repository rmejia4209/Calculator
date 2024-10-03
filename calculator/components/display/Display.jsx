import LastEquationDisplay from "./LastEquationDisplay";
import CurrentEquation from "./CurrentEquation";
import PreviousEquation from "./PreviousEquation";


export default function Display({equation, history, lastAns}){

  const formatEquation = (rawEquation, setDisplay) => {
    let equationString = "";
    rawEquation.forEach((element) => (equationString += element + " "));
    setDisplay(equationString);
  }

  return (
    <div className="flex flex-col w-full max-w-full h-24 rounded-lg border mb-1 truncate">
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