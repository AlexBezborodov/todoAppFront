import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import './Login.css'
export default class Login extends Component {
    state = {
        isLogged: false
    }

    onValidate = () => {   
       this.props.validate(true); 
    }

    render() {
        return (
            <Container className="border my-3 p-3 position" >
                <h2 className='text-center'>Sign In</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox" className="d-flex">
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="button"
                        onClick={this.onValidate}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
            
        )
    }
}
