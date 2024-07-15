// updater function = A function as an argument to setState() usually 
// ex.setYear(year + 1)
// Allow for safe updates based on the previous state 
// Use with multiple state updates and asynchronous functions
// Good practice to use updater functions




import React, {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state update for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        setCount(c => c + 1);  
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const reset = () => {
        setCount(c => c = 0);
    }

    return(<div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
    </div>);
}
export default Counter