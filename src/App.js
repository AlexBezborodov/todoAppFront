import React, { Component } from 'react';
import Application from './Components/Application/Application'
import Login from './Components/LoginPage/Login';
import FormRegistration from './Components/FormRegistration/FormRegistration';

 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button } from 'react-bootstrap';




export default class App extends Component {
  id = 1000;
  state = {
    register: [
      {name: 'John', surname: 'Dou', email: 'jdou@gmail.com', password:'q1w2e3r4', id:1},
      {name: 'Aleksandr', surname: 'Lukashenko', email: 'bulba.che@gmail.com', password:'BULBA', id:2},
    ],
    isLogged: false,
    registration: false,
  }
  validate = (text) => {
    this.setState({
      isLogged:text
    })
  }
  
  addPerson = (name, surname, email, password) => {  

    const newPerson = {
        name, 
        surname, 
        email,
        password,
        id: this.id++,
      };
    this.setState(({register}) =>{
      const newRegister = [...register, newPerson];
    return {
      register: newRegister,
      isLogged: false,
      registration: false
    }
    });
  };

  
  render() {
    const { isLogged,registration, register } = this.state;
    let activeComponent;
    let activeButton;
    const logOut = () => {
      this.setState({
        isLogged: false
      });
    }
    const logInForm = () => {
      this.setState({
        isLogged: false,
        registration: false
      });
    }
    const registerForm = () => {
      this.setState({
        isLogged: false, 
        registration: true
      });
    }

    if (isLogged & registration === false) {
      activeComponent = <Application logOut= {this.validate} personInfo={this.state.register}/>;
      activeButton = <Button variant="info" onClick={logOut}> Log Out</Button>;
    }else if (isLogged === false & registration === true) {
      activeComponent = <FormRegistration onPersonAdded={this.addPerson}/>;
      activeButton = <Button  variant="light" onClick={logInForm}> Sign In</Button>;
    } else {
      activeComponent = <Login validate = {this.validate} />;
      activeButton = <Button variant="info" onClick={registerForm}> Sign Up</Button> ;
    }

    return (
      <div>
        <div className='header  d-flex justify-content-between align-items-center mb-3'>
          
              <div className='d-flex align-items-center ml-3 px-3 py-1 rounded border border-info'><h2 className='text-info font-weight-bold'>TeNNeT</h2></div>
              <div className='mr-3'>
              { activeButton }
              </div>
        </div>
          { activeComponent } 
      </div>
      
    );
  } 
}

