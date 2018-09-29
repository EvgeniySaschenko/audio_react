require('./components/App.sass')

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './storages/index.js';

import App from './components/App.jsx';

window.srcData= 'http://audio.ua-ix.biz/';

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('container')
);