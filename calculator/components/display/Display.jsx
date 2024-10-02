import LastEquationDisplay from "./LastEquationDisplay";
import CurrentDisplay from "./CurrentDisplay";


export default function Display({equation, history}){

  const formatEquation = (rawEquation, setDisplay) => {
    let equationString = "";
    rawEquation.forEach((element) => (equationString += element + " "));
    setDisplay(equationString);
  }

  return (
    <div className="w-full max-w-full h-20 rounded-lg border mb-1 truncate">
      <LastEquationDisplay history={history} formatEquation={formatEquation} />
      <CurrentDisplay equation={equation} formatEquation={formatEquation} />
    </div>
  );
}