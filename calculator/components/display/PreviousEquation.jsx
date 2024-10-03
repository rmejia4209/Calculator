"use client"
import { useState, useEffect } from "react";


export default function PreviousEquation({
  history,
  formatEquation,
  excludeAns,
}){

  const [formattedEquation, setFormattedEquation] = useState("");

  useEffect(() => {
    const rawEquation = history.length ? [...history[history.length - 1]] : [];
    if (rawEquation.length && excludeAns) rawEquation.pop(-1); 
    formatEquation(rawEquation, setFormattedEquation)
  }, [history, excludeAns]);


  return (
    <span className="text-2xl ml-auto mr-2">{formattedEquation}</span>
  );
}