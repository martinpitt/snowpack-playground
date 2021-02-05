import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const _ = cockpit.gettext;

const Application = () => {
    const [counter, setCounter] = useState(0);
    const [hostname, setHostname] = useState(_("Unknown"));

    useEffect(() => cockpit.file('/etc/hostname').watch(content => setHostname(content.trim())));

    return (
        <>
            <h1>Snowpack Learn playground</h1>

            <p>Hello from host { hostname }</p>

            <p>Counter is { counter }</p>
            <button onClick={ () => setCounter(counter + 1) }>Increase</button>
        </>
    );
};

ReactDOM.render(<Application />, document.getElementById('root'));
