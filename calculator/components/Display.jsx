"use client"
import { useState, useEffect } from "react";


export default function CurrentDisplay({equation}){

  const [displayEq, setDisplayEq] = useState("");

  useEffect(()=>{
    let equationString = "";
    equation.forEach((element) => (equationString += element + " "));
    setDisplayEq(equationString);
  }, [equation])


  return (
    <div className="w-full max-w-full h-10 rounded-lg border mb-1 truncate">
      <p className="text-xl truncate">{displayEq}</p>
    </div>
  );
}