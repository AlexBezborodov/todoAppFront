import React, { Component } from 'react';
import { Container,Row,Col,Button,Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from 'moment';

export default class EditForm extends Component {
    state = {
        title: this.props.item.title,
        description: this.props.item.description,
        priority: this.props.item.priority,
        deadline: new Date(),
        ui:this.props.item.un,
        checked:this.props.item.checked
    }
    cancel = () => {
        this.props.canceled(false);
    }
    
    editChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});        
    }  
    
    changeDate = (date) => {
        this.setState({
            deadline: date
        });    
    }; 
    
    editAdd = (e) => {
        e.preventDefault();
        const {title, description, priority, ui, checked ,deadline} = this.state;
        const stringDate = moment(deadline).format('L');
        this.props.editAdded(title, description, priority, stringDate, this.props.idx, ui, checked );
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
                                name='title'
                                onChange={this.editChange}
                            />  
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name='description'
                                type="text"  
                                className="form-control my-2" 
                                placeholder="Description" 
                                value={this.state.description}
                                onChange={this.editChange}
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
                                <select value={this.state.priority} name='priority' className='custom-select' onChange={this.editChange} required >
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>       
                        </Col>
                        <Col xs='12' sm='8' md='6' className='d-flex justify-content-start align-items-center'>
                            <label className='m-2'>Deadline date </label>
                            <DatePicker 
                                className='align-self-center my-2' 
                                selected={this.state.deadline} 
                                onChange={this.changeDate} 
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
                                onClick={this.editAdd}
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
