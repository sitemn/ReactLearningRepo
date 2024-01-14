import React, { useState, useEffect } from 'react';

export default function Main2() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    //const [count1, setCount1] = useState(0);


    useEffect(() => { setTotal(total+1) }, [count]);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () =>{
        if(count != 0) setCount(count - 1);
    }
    return (
      <div>
        <button class="button-spacing" onClick={decrement}>
          -
        </button>
        {count}
        <button class="button-spacing" onClick={increment}>
          +
        </button>
        <br></br>
        {total}
        <br></br>
        <button class="button-spacing" onClick= {() => {
        setCount(count+1)}}>
          Click
        </button>

      </div>
    );
}
