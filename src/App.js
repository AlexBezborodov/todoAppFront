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
      {name: 'Oleksandr', surname: 'Bezborodov', email: 'alexbezborodov23@gmail.com', password:'q1w2e3r4', id:1},
      {name: 'Karina', surname: 'Bezborodova', email: 'alexbezborodov.che@gmail.com', password:'q1w2e3r4', id:2},
    ],
    isLogged: false,
    registration: false
    
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
    const logOut = () => {
      this.setState({
        isLogged: false
      });
    }
    const registerForm = () => {
      this.setState({
        isLogged: false, 
        registration: true
      });
    }

    if (isLogged & registration === false) {
      activeComponent = <Application logOut= {this.validate} personInfo={register}/>
    }else if (isLogged === false & registration === true) {
      activeComponent = <FormRegistration onPersonAdded={this.addPerson}/>
    } else {
      activeComponent = <Login validate = {this.validate} />
    }

    return (
      <div>
        <div className='header  d-flex justify-content-between align-items-center mb-3'>
          
              <div className='d-flex align-items-center border ml-3 '>Logo</div>
              <div className='mr-3'>
              {isLogged ? <Button variant="info" onClick={logOut}> Log Out</Button> : null }
              {isLogged ? null : <Button variant="info" onClick={registerForm}> Sign Up</Button> }
              </div>
        </div>
          { activeComponent } 
      </div>
      
    );
  } 
}

