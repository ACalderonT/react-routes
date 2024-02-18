import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NotFound.css";

const NotFound = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col className="not-found">
						<h1>404</h1>
						<h2>Page Not Found</h2>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default NotFound;
