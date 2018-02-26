import React from 'react'; // view library.
import ReactDOM from 'react-dom'; // used for the DOM website
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(<App />,document.getElementById('root'),);
registerServiceWorker();
