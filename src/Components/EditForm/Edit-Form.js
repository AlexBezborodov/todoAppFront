import React, { Component } from 'react';
import { Container,Row,Col,Button,Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";


export default class EditForm extends Component {
    state = {
        title: this.props.item.title,
        description: this.props.item.description,
        priority: this.props.item.priority,
        deadline: new Date()
    }
    cancel = () => {
        
        this.props.canceled(false);
    }
    render() {
        
        
        return (            
            <Container className=' mx-auto my-2 border'>
            <h3 className='ml-3 mt-2'>Edit Task <span className='font-weight-bold text-info'>{this.props.item.title}</span></h3>
            <div className=' my-2' >
                <form onSubmit={this.onAdd}>
                    <Row>
                        <Col class="d-flex justify-content-center align-items-center">    
                            <Form.Control 
                                type="text" 
                                placeholder="Title"
                                className="form-control my-2" 
                                value={this.state.title}
                            />  
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name='descripotion'
                                type="text" 
                                aria-label="descr" 
                                className="form-control my-2" 
                                placeholder="Description" 
                                value={this.state.description}
                            />
                        </Col>   
                    </Row>
                    <Row>
                        <Col xs='12' sm='4' md='3' className='mt-2 d-flex align-items-center justify-content-start'>
                            <div className='d-flex my-2 ' >
                                <label 
                                    className='m-2'    
                                >
                                    Priority 
                                </label>
                                <select value={this.state.priority} className='custom-select' required >
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>       
                        </Col>
                        <Col xs='12' sm='8' md='6' className='d-flex justify-content-start align-items-center'>
                            <label className='m-2'>Deadline date </label>
                            <DatePicker 
                                className='align-self-center my-2  ' 
                                selected={this.state.deadline} 
                                // onChange={this.changeDate} 
                                minDate={new Date()}
                                isClearable
                                
                            />
                        </Col>
                        <Col xs='12' md='2' className='d-flex justify-content-center my-2' >    
                            <Button 
                                as='input' 
                                type='submit' 
                                variant='outline-info active' 
                                size='sm' 
                                className='my-auto button-width'
                            />
                            <Button 
                                as='input' 
                                type='button' 
                                variant='outline-warning active' 
                                size='sm' 
                                className='my-auto mx-2 button-width text-light font-weight-bold' 
                                value='Cancel'
                                onClick={this.cancel}
                            />
                        </Col>
                    </Row>
                </form>
            </div>
                       
        </Container>
        )
    }
}
