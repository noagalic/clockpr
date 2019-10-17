import React from 'react';
import Clock from './Clock'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			time: ''
		}
	}

	onTimeChange = (event) => {
		this.setState({ time: event.target.value })
	}
}



export default App;