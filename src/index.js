import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

setTimeout(() => {
    ReactDOM.render(
        <h1>Desmonta desgrama</h1>,
        document.getElementById('root')
    );
}, 4000)