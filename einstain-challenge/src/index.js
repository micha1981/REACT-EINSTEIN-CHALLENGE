import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>hi</h1>, document.getElementById('root'));

serviceWorker.unregister();
