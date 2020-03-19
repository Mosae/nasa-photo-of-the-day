import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhotoDisplay() {
	const [image, setImage] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then(response => {
				console.log(response.data);
			})
			.catch(error => {
				console.log('data was not returned', error);
			});
	}, []);
	return <div className="photo">Photo</div>;
}
