


function AllClear({setHistory}) {

  const removeHistory = () => {
    setHistory([]);
  }

  return (
    <button 
      onClick={removeHistory}
    >
      AC
    </button>
  );


}

function ClearEntry({equation, setEquation}) {

  const removeLastEntry = () => {
    if (equation.length) setEquation(equation.slice(0, -1));
  }

  return (
    <button 
      onClick={removeLastEntry}
    >
      CE
    </button>
  );

}


export default function Clear({equation, setEquation, setHistory}) {


  return (
    <div 
      className="btn btn-square btn-error btn-lg text-xl col-span-1"
    >
      {
        equation.length
          ? <ClearEntry equation={equation} setEquation={setEquation} />
          : <AllClear setHistory={setHistory} />
      }
    
    </div>
  );
}