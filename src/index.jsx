import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Card, CardTitle, CardBody,
    Button,
} from '@patternfly/react-core';

// HACK: implicit imports don't work: https://github.com/snowpackjs/snowpack/discussions/2120
import '@patternfly/patternfly/patternfly.css';

import './index.css';

const Application = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Snowpack Playground</h1>
            <Card>
                <CardTitle>Counter</CardTitle>
                <CardBody>
                    <p>{ counter }</p>
                    <Button onClick={ () => setCounter(counter + 1) }>Increase Counter</Button>
                </CardBody>
            </Card>
        </>
    );
};

ReactDOM.render(<Application />, document.getElementById('root'));
