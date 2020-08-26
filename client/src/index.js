import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App/App.jsx';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<Provider store={ store }>
			<App />	
		</Provider>
	</BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
