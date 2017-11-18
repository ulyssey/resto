import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/Containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
