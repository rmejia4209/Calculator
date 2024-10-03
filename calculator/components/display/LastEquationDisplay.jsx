"use client"
import { useState, useEffect } from "react";


export default function LastEquationDisplay({history, formatEquation}){

  const [displayEq, setDisplayEq] = useState("");

  useEffect(() => {
    const rawEquation = history[history.length - 1] || [];
    formatEquation(rawEquation, setDisplayEq)
  }, [history]);


  return (
    <p className="text-4xl truncate">History: {displayEq}</p>
  );
}