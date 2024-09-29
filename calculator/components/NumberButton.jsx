'use client'


export default function NumberButton({num, action}) {


  return (
    <button 
      className="btn btn-square btn-lg text-xl col-span-1"
      onClick={()=>{action(num)}}
    >
      {num}
    </button>
  );
}