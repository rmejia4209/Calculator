'use client';

import { useContext, useState, useEffect } from "react";

import NumberPad from "@/components/NumberPad";
import KeyPad from "@/components/KeyPad";
import CurrentDisplay from "@/components/Display";



export default function Home() {

  const [eq, setEq] = useState([]);
  const [displayEq, setDisplayEq] = useState("");

  const concatEq = () => {
    let eqString = "";
    eq.forEach((element) => (eqString += element + " "));
    setDisplayEq(eqString);
  }

  useEffect(() => concatEq(), [eq]);

  return (
    <div className="flex flex-col">
    <CurrentDisplay />
      <KeyPad lastAns={null} equation={eq} setEquation={setEq}/>
    </div>
    
  );
}
