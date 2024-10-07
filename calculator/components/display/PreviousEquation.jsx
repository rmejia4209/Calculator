"use client"
import { useState, useEffect } from "react";
import { buildLaTexString } from "@/utils/LaTexHelper";
import Latex from "react-latex-next";

export default function PreviousEquation({history, excludeAns}){

  const [formattedEquation, setFormattedEquation] = useState("");

  useEffect(() => {
    const lastEquation = history.length ? [...history[history.length - 1]] : [];
    if (lastEquation.length && excludeAns) lastEquation.pop(-1); 
    const latex = buildLaTexString(lastEquation);
    setFormattedEquation(latex[1])
  }, [history, excludeAns]);


  return (
    <div className="h-fit w-fit text-xl ml-auto mr-2">
      <Latex>$${formattedEquation}$$</Latex>
    </div>
  );
}