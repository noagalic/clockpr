import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';
import tachyons from 'tachyons';

ReactDOM.render(
	<div>
		<h1 className="pa6"> Clock App Test </h1>
		<Clock />
	</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
