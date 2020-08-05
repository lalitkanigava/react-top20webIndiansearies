import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardss(props) {
	return (
		<Card className="card" style={{ width: "18rem", margin: "auto" }}>
			<Card.Img
				variant="top"
				className="img"
				src={props.info.img}
				style={{ width: "100%", height: "100%" }}
			/>
			<Card.Body>
				<Card.Title>
					<h4>{props.info.name}</h4>
				</Card.Title>
				<Button variant="secondary">
					<a href={props.info.link}>Watch Now</a>
				</Button>
				{""}
			</Card.Body>
			<hr></hr>
		</Card>
	);
}
export default Cardss;
