"use client"
import { useState, useEffect } from "react";


export default function CurrentEquation({equation, formatEquation, lastAns}) {

  const [formattedEquation, setFormattedEquation] = useState("");

  useEffect(()=>{
    formatEquation(equation, setFormattedEquation);
  }, [equation])

  return (
    <span
      className={
        `max-w-fit float-right mt-auto text-4xl
        ${formattedEquation ? "" : "ml-auto mr-2"}`
      }
    >
        {formattedEquation ? formattedEquation : lastAns}
    </span>
  );
}