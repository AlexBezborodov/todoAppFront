import React, { Component } from 'react';
import { Container,Button,Row,Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import moment from 'moment';
 
import "react-datepicker/dist/react-datepicker.css";
import './Add-item.css';

export default class AddIitem extends Component {
    
     
     
    state = {
        title: '',
        description: '',
        priority: 'High',
        deadline: new Date()
    }
   
    changeTitle = (e) => {
        
        this.setState({
            title: e.target.value
        });
    };
    changeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
        
    };
    changePriority = (e) => {
        this.setState({
            priority: e.target.value
        });
        
    };
    changeDate = (date) => {
    
        this.setState({
            deadline: date
        });
        
    }; 
    
    onAdd = (e) => {
        e.preventDefault();
        const {deadline} = this.state;
        const stringDate = moment(deadline).format('L');
        this.props.onItemAdded(this.state.title, this.state.description,this.state.priority, stringDate );
        this.setState({
            title: '',
            description: ''
        });
    }
    render() {
        const { label } = this.props;

        return (
            <Container className='mt-3 bg-dark  '>
                <form onSubmit={this.onAdd}>
                    <Row>
                    <div class="input-group mt-2 mx-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Title / Description</span>
                        </div>
                        <div className="w-20">
                        <input 
                            name='title'
                            type="text" 
                            aria-label="title" 
                            className="form-control" 
                            placeholder="Title" 
                            onChange={this.changeTitle}
                            value={this.state.title}
                        />    
                        </div>
                        
                        <input 
                            name='descripotion'
                            type="text" 
                            aria-label="descr" 
                            className="form-control" 
                            placeholder="Description" 
                            onChange={this.changeDescription}
                            value={this.state.description}
                        />
                    </div>
                    </Row>
                    <Row>
                        <Col xs='12' sm='4' md='3' className='mt-2 d-flex align-items-center justify-content-center'>
                            <div className='d-flex my-2 ' >
                                <label 
                                    className='m-2 text-light'    
                                >
                                    Priority 
                                </label>
                                <select value={this.state.value} onChange={this.changePriority} className='custom-select'>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </div>
                            
                                
                        </Col>
                        <Col xs='12' sm='8' md='6' className='d-flex justify-content-center align-items-center'>
                            <label className='m-2 text-light'>Deadline date </label>
                            <DatePicker 
                                className='align-self-center my-2  ' 
                                selected={this.state.deadline} 
                                onChange={this.changeDate} 
                                minDate={new Date()}

                                isClearable
                                placeholderText="Choose new Date"
                            />
                        </Col>
                        <Col xs='12' md='2' className='d-flex justify-content-center my-2' >
                            <Button 
                                as='input' 
                                type='submit' 
                                variant='outline-info active' 
                                value={label} 
                                size='sm' 
                                className='my-auto button-width' 
                                onSubmit={this.onAdd}
                            />
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-end'>
                        
                    </Row>
                </form>
                
            </Container>
        )
    }
}    
    