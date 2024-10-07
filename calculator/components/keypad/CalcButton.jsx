'use client'


export default function CalcButton({val, action, type}) {


  return (
    <button 
      className={
        `btn ${type}
        w-full h-full aspect-square text-xl
        col-span-1`
      }
      onClick={()=>{action(val)}}
    >
      {val}
    </button>
  );
}