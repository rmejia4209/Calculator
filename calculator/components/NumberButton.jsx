'use client'


export default function NumberButton({calcButton}) {


  return (
    <button className="btn btn-square btn-outline">
      {calcButton.displayVal}
    </button>
  );
}