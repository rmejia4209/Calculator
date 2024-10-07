'use client';

import { useState } from "react";
import MainKeyPad from "@/components/keypad/MainKeyPad";
import Display from "@/components/display/Display";



export default function Home() {

  const [equation, setEquation] = useState([]);
  const [history, setHistory] = useState([]);
  const [lastAns, setLastAns] = useState(null);


  

  return (
      <div className="flex flex-col items-center h-screen">
        <Display
          equation={equation}
          history={history}
          lastAns={lastAns}
        />
        <MainKeyPad
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
