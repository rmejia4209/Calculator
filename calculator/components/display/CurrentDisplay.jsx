"use client"
import { useState, useEffect } from "react";


export default function CurrentDisplay({equation, formatEquation}) {

  const [displayEq, setDisplayEq] = useState("");

  useEffect(()=>{
    formatEquation(equation, setDisplayEq);
  }, [equation])


  return (
    <p className="text-xl truncate">Current: {displayEq}</p>
  );
}