"use client"
import { useState, useEffect } from "react";
import Latex from 'react-latex-next';
import { buildLaTexString } from "@/utils/LaTexHelper";


export default function CurrentEquation({equation, lastAns}) {

  const [formattedEquations, setFormattedEquations] = useState(["", ""]);
  const [cursorOn, setCursorOn] = useState(0)

  useEffect(()=>{
    setFormattedEquations(buildLaTexString(equation));
  }, [equation])

  useEffect(()=>{
    const intervalId = setInterval(() => {
      cursorOn ? setCursorOn(0) : setCursorOn(1);
    }, 500);
    return () => clearInterval(intervalId);
  }, [cursorOn])


  return (
    <div 
      className={
        `max-w-fit max-h-fit float-right mt-auto text-4xl
        ${
          formattedEquations[0].length > 1 || lastAns == null 
          ? "" 
          : "ml-auto mr-2"
        }`
      }
    >
      {
        formattedEquations[0].length > 1 || lastAns == null
        ? <Latex>$${formattedEquations[cursorOn]}$$</Latex>
        : <Latex>$${lastAns}$$</Latex>
      }  
    </div>
  );
}