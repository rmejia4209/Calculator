import CalcButton from "../CalcButton";
import solve from "@/utils/symMath";

export default function Equals({
  equation,
  setEquation,
  history,
  setHistory,
  setLastAns
}) {

  const getSolution = () => {
    const solution = solve(equation);
    setLastAns(String(solution));
    const newHistory = [...history, [...equation, "=", String(solution)]];
    setHistory(newHistory);
    setEquation([]);
  }

  return (
    <div className="row-start-5"> 
      <CalcButton val={"="} action={getSolution} type={"btn-accent"}/>
    </div>
  );
}