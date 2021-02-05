import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Application = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Snowpack Learn playground</h1>

            <p>Counter is { counter }</p>
            <button onClick={ () => setCounter(counter + 1) }>Increase</button>
        </>
    );
};

ReactDOM.render(<Application />, document.getElementById('root'));
