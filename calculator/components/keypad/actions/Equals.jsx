import CalcButton from "../CalcButton";
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
    <div className="row-start-5"> 
      <CalcButton val={"="} action={foo} type={"btn-accent"}/>
    </div>
  );
}