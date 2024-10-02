'use client';

import { useState } from "react";
import KeyPad from "@/components/KeyPad";
import Display from "@/components/display/Display";



export default function Home() {

  const [equation, setEquation] = useState([]);
  const [history, setHistory] = useState([]);
  const [lastAns, setLastAns] = useState(null);


  

  return (
    <div className="flex flex-col">
      <Display
        equation={equation}
        history={history}
      />
      <KeyPad
        equation={equation}
        setEquation={setEquation}
        history={history}
        setHistory={setHistory}
        lastAns={lastAns}
        setLastAns={setLastAns}
      />
    </div>
    
  );
}
