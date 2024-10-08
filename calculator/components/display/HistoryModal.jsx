"use client";
import CloseIcon from "./CloseIcon";
import { useEffect, useState } from "react";
import Latex from "react-latex-next";
import { buildLaTexString } from "@/utils/LaTexHelper";

export default function HistoryModal({history}) {

  const [equations, setEquations] = useState([]);

  const closeModal = () => {
    document.getElementById('history_modal').close()
  }

  const updateHistory = () => {
    if (!history.length) return;
    const newEquations = [...equations];
    // remove last item
    if (newEquations.length === 5) newEquations.pop();


    // get the latest equation
    const latestEquation = buildLaTexString(history[history.length - 1])[1];

    // insert at the front of the array
    newEquations.unshift(latestEquation);
    setEquations(newEquations);
  }
  
  useEffect(()=>{
    updateHistory();
  },[history]);


  return (
    <dialog id="history_modal" className="modal">
      <div className="modal-box">
        <button onClick={closeModal}>
          <CloseIcon />
        </button>
        <h3 className="font-bold text-center text-4xl">History</h3>  
        {equations.map((equation, idx) => (
          <Latex key={idx} >$${equation}$$</Latex>
        ))}
      </div>
    </dialog>
  );
}