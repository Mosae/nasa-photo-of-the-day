import React from 'react';
import './App.css';
import PhotoDisplay from './components/PhotoDisplay.js';

function App() {
	return (
		<div className="App">
			<div className="header_container">
				{/* logo comes in here later */}

				<h1>NASA PHOTO OF THE DAY</h1>

				<PhotoDisplay />
			</div>
		</div>
	);
}

export default App;
