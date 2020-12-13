import React, { Component } from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import Avatar from './Avatar/Avatar';

import './Header.css';

export default class Header extends Component  {
  
 render () {
  const {name, surname, counter} = this.props;
  const firstLetter = name.substring(0,1);
  const secondLetter = surname.substring(0,1);
  return (
    <Container className=' header-bgc'>
       <Row>
          <Col xs='12' sm md='8' lg='8' className='d-flex justify-content-start align-items-center '>
            <Avatar name={`${firstLetter}${secondLetter} `}  />
            <span className='full-name ml-3'>{`${name} ${surname}`}</span>        
          </Col>
          <Col xs='12' sm md='4' lg='4' className='d-flex justify-content-center align-items-center'>
            <span className='high-priority '>{counter > 0 ? `${counter} tasks with HIGH priority` : `no tasks with HIGH priority`}</span>
          </Col>  
       </Row>
       
        
    </Container>
)
}
 }
