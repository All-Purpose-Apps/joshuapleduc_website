import React from 'react'
import {
    Button,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";

export default function ContactForm() {

    const [formState, setFormState] = React.useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    const contactForm = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="section section-light text-dark landing-section">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center">Email Me</h2>
                        <h5 className="text-center"><a href="mailto:jpleduc@joshuapleduc.com">directly at jpleduc@joshuapleduc.com</a></h5>
                        {/* <Form className="contact-form" onSubmit={e => contactForm(e)}>
                            <Row>
                                <Col md="6">
                                    <label>Name</label>
                                    <Input placeholder="Name" name="name" onChange={e => handleChange(e)} required />
                                </Col>
                                <Col md="6">
                                    <label>Email</label>
                                    <Input placeholder="Email" type="email" name="email" onChange={e => handleChange(e)} required />
                                </Col>
                            </Row>
                            <label>Message</label>
                            <Input
                                placeholder="What would you like to know?"
                                type="textarea"
                                rows="4"
                                name="message"
                                onChange={e => handleChange(e)}
                                required
                            />
                            <Row>
                                <Col className="offset-md-4" md="6">
                                    <Button className="btn-fill" color="danger" size="lg" type='submit'>
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </Form> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
