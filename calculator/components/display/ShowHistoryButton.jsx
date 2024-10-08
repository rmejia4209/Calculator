"use client"
import ClockIcon from "./ClockIcon";
import HistoryModal from "./HistoryModal";


export default function ShowHistoryButton({history}) {

  const openHistory = () => {
    document.getElementById('history_modal').showModal()
  }

  return (
    <>
      <button
      className="p-1 self-start"
        onClick={openHistory} 
      >
        
        <ClockIcon />
      </button>
      <HistoryModal history={history}/>
    </>
    
    
  );
}