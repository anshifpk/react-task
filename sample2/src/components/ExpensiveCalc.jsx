import React, { useMemo, useState } from 'react'

const ExpensiveCalc = () => {
    const [num, setnum] = useState(0);
    const [otherState,setotherState] = useState(false);

    const calculate = (num) => {
        console.log("calaculating!");
        ///Expensive calculation
        return num * 2;
    };

    const reuslt = useMemo(() => {
        return calculate(num);
    },[num]);

    console.log(otherState);

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center">{reuslt}</h1>
      <button 
        className="border bg-red-100 text-red-8oo px-4 py-2 cursor-pointer"
        onClick={() => setnum((prev) => prev + 1)}
        >
        Increment
      </button>
      <button 
        className="border bg-blue-100 text-blue-8oo rounded-full px-4 py-2 font-bold cursor-pointer"
        onClick={() => setotherState((prev) => !prev)}
        >
         Change other state
      </button>
    </div>
  );
};

export default ExpensiveCalc;
