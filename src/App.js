import React from 'react';
import './App.css';
//import logo
import { Button } from 'reactstrap';
import styled from 'styled-components';
import PhotoDisplay from './components/PhotoDisplay.js';
//import Footer from './components/Footer.js

// const Button = styled.button`
//     padding: 6px 10px;
//     margin: 5px;
//     border: none;
//     border-radius: 3px;
//     color: white;

//     ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
//     ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
//     ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
//     ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
// `;

const WrapperDiv = styled.div`
	text-align: center;
	font-family: sans-serif;
	color: red;
`;

function App() {
	return (
		<div className="App">
			<div className="header_container">
				{/* logo comes in here later */}
				<WrapperDiv>
					<h1>NASA PHOTO OF THE DAY</h1>
				</WrapperDiv>
				<button color="danger">NASA </button>

				<PhotoDisplay />
			</div>
		</div>
	);
}

export default App;
