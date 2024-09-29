'use client';

import { useContext, useState, useEffect } from "react";

import NumberPad from "@/components/NumberPad";
import KeyPad from "@/components/KeyPad";
import CurrentDisplay from "@/components/Display";



export default function Home() {

  const [equation, setEquation] = useState([]);

  return (
    <div className="flex flex-col">
      <CurrentDisplay equation={equation}/>
      <KeyPad lastAns={null} equation={equation} setEquation={setEquation}/>
    </div>
    
  );
}
