import React, { Component } from 'react';
import { Container,Button,Row,Col } from 'react-bootstrap';

import './To-do-list-item.css';
export default class ToDoListItem extends Component {
    
    
    render () {
        const { title,priority,desc,date, onDelete, onEdit, onToggleDone, checked } = this.props;
        let classNames = `${priority} `; 
        
        if(priority === 'High') {
            classNames = 'high';
        } 
        if(priority === 'Medium') {
            classNames = 'medium';
        }
        if(priority === 'Low') {
            classNames = 'low';
        }
        
        if(checked) {
            classNames = `done`;
        }
        const editButton = <Button 
                        as='input' 
                        variant='warning' 
                        type='button' 
                        value='Edit' 
                        size='sm' 
                        className='ml-1 ' 
                        onClick={onEdit}    
                    />;
        
        return (
            <Container fluid className='d-flex  my-3 hover-effect item-bgc custom-shadow '>
                <Row className='width hover-effect'>
                    <Col xs='12' sm='12' md='12' lg='9' className='d-flex mx-xs-auto  my-1 align-items-center'>    
                        <Col xs='1' sm='1'>
                            <input 
                                type="checkbox" 
                                checked={checked} 
                                className ="min-w"
                                onClick={onToggleDone} 
                            />    
                        </Col>
                        <Col xs='2' sm='2'>
                            <span className={classNames}>{title}</span>   
                        </Col>
                        <Col >
                            <span className={classNames}>{desc}</span>   
                        </Col>
                        <Col xs='2' sm='2'>
                            <span className={classNames}>{priority}</span>   
                        </Col>
                        <Col xs='2' sm='2'  className=' d-flex  my-1 align-items-baseline'>
                            <span className={classNames} >{date}</span>
                        </Col>
                    </Col>
                    <Col sm='12' md='12' lg='3' className=' visible d-flex justify-content-center my-1 align-items-center'>
                        <Button 
                            as='input' 
                            variant='danger' 
                            type='button' 
                            value ='Delete' 
                            size='sm' 
                            className='ml-3'
                            onClick={onDelete} 
                        />
                        
                        {checked ? null : editButton}
                    </Col>
                </Row>                         
            </Container>
        )
    }    
    
}
