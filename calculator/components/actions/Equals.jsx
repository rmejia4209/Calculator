import solve from "@/utils/symMath";

export default function Equals({equation}) {

  const displaySolution = () => {
    equation.forEach(
      (element, idx) => {if (element === "÷") equation[idx] = "/"}
    );

    alert(solve(equation));
  }

  return (
    <button 
      className="btn btn-square btn-accent btn-lg text-xl col-span-1 row-start-5"
      onClick={displaySolution}
    >
      =
    </button>

  );
}