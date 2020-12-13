import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import './FormRegistration.css'
export default class FormRegistration extends Component {
    state = {
        isLogged: false,
        name:'',
        surname:'',
        email:'',
        password:''
    }
    changeName = (e) => {
        
        this.setState({
            name: e.target.value
        });
    };
    changeSurname = (e) => {
        this.setState({
            surname: e.target.value
        });
    };
    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        }); 
    };
    changepassword = (e) => {
        this.setState({
            password: e.target.value
        });    
    }; 
    
    
    onAddPerson = (e) => {
        e.preventDefault();
        // this.props.onPersonAdded( this.state.name, this.state.surname, this.state.email ,this.state.password );
        this.props.onPersonAdded(this.state.name, this.state.surname, this.state.email ,this.state.password );
    }

    render() {
        return (
            <Container className="border my-3 p-3 position" >
            <h2 className='text-center'>Registration form</h2>
            <Form onSubmit={this.onAddPerson}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={this.changeName}  />
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter your surname"  onChange={this.changeSurname} />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" onChange={this.changeEmail}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='psw1' onChange={this.changepassword} />
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit"
                    onSubmit={this.onAddPerson}
                >
                    Submit
                </Button>
            </Form>
        </Container>
            
        )
    }
}
