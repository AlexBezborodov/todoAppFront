import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import FormErrors from '../FormsErrors/FormsErrors';

import './FormRegistration.css'
export default class FormRegistration extends Component {
    state = {
        isLogged: false,
        name:'',
        surname:'',
        email:'',
        password:'',
        formErrors: {name:'',surname:'',email: '', password: ''},
        nameValid: false,
        surnameValid: false,
        emailValid: false,
        passwordValid: false,  
    }
    
    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
            
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.namelValid;
        let surnameValid = this.state.surnameValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {  
        case 'name':
            nameValid = value.length > 1;
            fieldValidationErrors.name = nameValid ? '': 'must contains min 2symbols ';
            break;
        case 'surname':
            surnameValid = value.length >= 2;
            fieldValidationErrors.surname = surnameValid ? '': 'must contains min 2symbols ';
            break;    
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' must contain min 6 characters';
            break;    
        default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid,
                        surnameValid,
                        passwordValid
                      });
      }
    
      validateForm() {
          let newFormValid = false; 
          if (this.state.nameValid && this.state.surnameValid && this.state.passwordValid){
            newFormValid = true;
            this.setState({
                formValid: newFormValid
            });
          }else {
            this.setState({
                formValid: newFormValid
            });
          }
      }
    
      errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
      }
    
    onAddPerson = (e) => {
        e.preventDefault();
        this.props.onPersonAdded(this.state.name, this.state.surname, this.state.email ,this.state.password );
    }

    render() {
        return (
            <Container className="border my-3 p-3 position" >
            <h2 className='text-center'>Registration form</h2>
            <Form onSubmit={this.onAddPerson}>
                <div >
                    <Form.Label>Name</Form.Label>
                    <Form.Control className={this.errorClass(this.state.formErrors.name)} value={this.state.name}  name='name' type="text" placeholder="Enter your name" onChange={this.handleChange}  />
                    <Form.Label>Surname</Form.Label>
                    <Form.Control className={this.errorClass(this.state.formErrors.surname)} value={this.state.surname} name='surname' type="text" placeholder="Enter your surname"  onChange={this.handleChange} />
                    <Form.Label >Email</Form.Label>
                    <Form.Control className={this.errorClass(this.state.formErrors.email)} value={this.state.email} name='email' type="email" placeholder="Enter your email" onChange={this.handleChange}/>
                </div>

                <Form.Group >
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={this.errorClass(this.state.formErrors.password)} value={this.state.password} name='password' type="password" placeholder="Password" onChange={this.handleChange} />
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit"
                    onSubmit={this.onAddPerson}
            
                >
                    Submit
                </Button>
                <FormErrors className='my-2' formErrors={this.state.formErrors} />
            </Form>
        </Container>
            
        )
    }
}
