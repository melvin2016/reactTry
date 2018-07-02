import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter basename="/tweetapp">
        <App /> 
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();
