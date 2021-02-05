/* global cockpit */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Card, CardTitle, CardBody,
    Button,
} from '@patternfly/react-core';

// HACK: implicit imports don't work: https://github.com/snowpackjs/snowpack/discussions/2120
import '@patternfly/patternfly/patternfly.css';

import './index.css';

const _ = cockpit.gettext;

const Application = () => {
    const [counter, setCounter] = useState(0);
    const [hostname, setHostname] = useState(_("Unknown"));

    useEffect(() => cockpit.file('/etc/hostname').watch(content => setHostname(content.trim())));

    return (
        <>
            <Card>
                <CardTitle>Counter</CardTitle>
                <CardBody>
                    <p>{ counter }</p>
                    <Button onClick={ () => setCounter(counter + 1) }>Increase Counter</Button>
                </CardBody>
            </Card>

            <Card>
                <CardTitle>Hostname (cockpit API)</CardTitle>
                <CardBody>{ hostname }</CardBody>
            </Card>
        </>
    );
};

ReactDOM.render(<Application />, document.getElementById('root'));
