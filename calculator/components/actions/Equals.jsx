import solve from "@/utils/symMath";

export default function Equals({
  equation,
  setEquation,
  history,
  setHistory,
  setLastAns
}) {

  const foo = () => {
    const solution = solve(equation);
    setLastAns(solution);
    const newHistory = [...history, [...equation, "=", String(solution)]];
    setHistory(newHistory);
    setEquation([]);
  }

  return (
    <button 
      className="btn btn-square btn-accent btn-lg text-xl col-span-1 row-start-5"
      onClick={foo}
    >
      =
    </button>

  );
}