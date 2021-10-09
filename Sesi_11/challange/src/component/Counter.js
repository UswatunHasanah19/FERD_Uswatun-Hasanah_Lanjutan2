import React, {useState} from 'react';

export default  function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount=0);
    return (
        <>
            Count: {count}
            <br />
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount -1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount +1)}>+</button>
        </>
    );
}


