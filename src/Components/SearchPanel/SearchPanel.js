import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Container,Button, ButtonGroup,Row,Col } from 'react-bootstrap';

import './SearchPanel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    }
    searchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.searchChange(term);
    }
   render() {
        return (
            <Container className='d-flex bg-dark'>
                    <Row className='width '>
                        <Col xs='12'sm='12' md='7' lg='8' className='d-flex my-1'> 
                            <input 
                                className='form-control search-input' 
                                placeholder={this.props.label} 
                                value={this.state.term}
                                onChange={this.searchChange}
                            />
                           
                        </Col>    
                        <Col xs='12'sm='12' md='5' lg='4' className='d-flex justify-content-center my-2'>
                            <ButtonGroup size='sm'  aria-label='Search' >
                                <Button as='input' variant='outline-info active' type='button' value='All tasks' size='sm' />
                                <Button as='input' variant='outline-info' type='button' value='by priority' size='sm' />
                                <Button as='input' variant='outline-info' type='button' value='by date' size='sm'  /> 
                            </ButtonGroup>                
                        </Col>
                    </Row>
            </Container>
        );
    }
}

