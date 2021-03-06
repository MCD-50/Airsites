//from system
import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history'; // static app
import { Router } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { middleware } from './src/route/configureStore'

//import from app
import routes from './src/route/route';
import reducer from './src/store/reducer';

//import styles here
import './src/style/css/app.css';
//import 'antd/dist/antd.css'; 

//import js files



const store = createStore(reducer, middleware);

window.onload = () => {
	render(
		<Router history={createHashHistory()}>
			<Provider store={store}>
				{routes}
			</Provider>
		</Router>, document.getElementById('app')
	);
};
