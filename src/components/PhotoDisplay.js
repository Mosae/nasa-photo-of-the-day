import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Card, CardHeader, Col, Badge, Row } from 'reactstrap';

export default function PhotoDisplay() {
	const [image, setImage] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then(response => {
				console.log(response.data);
				setImage(response.data);
			})
			.catch(error => {
				console.log('data was not returned', error);
			});
	}, []);

	return (
		<>
			<h2>
				<Badge color="warning">Title : {image.title}</Badge>
			</h2>
			<img clasName="pod" src={image.url} alt="nasa img of the day" />;
			<div>
				<Alert color="success">
					<h3 className="alert-heading">What's the story behind this photo?</h3>
					<h5>{image.explanation}</h5>
					<hr />
					<p className="mb-0">Project By: Mosae Litsoane</p>
				</Alert>
			</div>
		</>
	);
}
