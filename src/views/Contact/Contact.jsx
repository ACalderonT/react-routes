import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

const Contact = () => {
	return (
		<>
			<div className="main-form-container">
				<p className="form-title">
					Cuentanos, ¿en que te podemos ayudar?
				</p>
				<Form className="form-container">
					<Form.Group
						controlId="formBasicEmail"
						className="form-group"
					>
						<Form.Label>Correo</Form.Label>
						<Form.Control
							type="email"
							placeholder="Ingresa tu correo"
						/>
					</Form.Group>

					<Form.Group
						controlId="exampleForm.ControlTextarea1"
						className="form-group"
					>
						<Form.Label>Descripción</Form.Label>
						<Form.Control as="textarea" rows={4} />
					</Form.Group>
					<Button type="submit">
						Enviar
					</Button>
				</Form>
			</div>
		</>
	);
};

export default Contact;
