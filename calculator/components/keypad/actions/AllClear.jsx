import CalcButton from "../CalcButton";


function AllClear({setHistory, setLastAns}) {

  const removeHistory = () => {
    setHistory([]);
    setLastAns(null);
  }

  return (
    <CalcButton val={"AC"} action={removeHistory} type={"btn-error"}/>
  );


}

function ClearEntry({equation, setEquation}) {

  const removeLastEntry = () => {
    if (equation.length) setEquation(equation.slice(0, -1));
  }

  return (
    <CalcButton val={"CE"} action={removeLastEntry} type={"btn-error"}/>
  );

}


export default function Clear({
  equation,
  setEquation,
  setHistory,
  setLastAns
}) {


  return (
    <>
      {
        equation.length
          ? <ClearEntry equation={equation} setEquation={setEquation}/>
          : <AllClear setHistory={setHistory} setLastAns={setLastAns}/>
      }
    </>
  );
}