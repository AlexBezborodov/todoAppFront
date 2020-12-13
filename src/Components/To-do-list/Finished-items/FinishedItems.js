import React, { Component } from 'react';
import ToDoListItem from '../To-do-list-item/To-do-list-item';
import { Container } from 'react-bootstrap';

import './FinishedItems.css';
export default class FinishedItems extends Component {


    render () {
        const{onDelete,data, onEdit, onToggleDone, checked} = this.props
        const listOfItems = data.filter((el) => el.checked === true );
        const doneList = listOfItems.map((item,id) => {
            return( 
                    <ToDoListItem 
                        key={id}   
                        title={item.title}
                        desc={item.description}
                        priority={item.priority}
                        date={item.deadline}
                        checked={item.checked}
                        onDelete={() => onDelete(item.un)}
                        onEdit={() => onEdit(item.un)}   
                        onToggleDone={()=> onToggleDone(item.un)}        
                    />
            );      
        });
        return (
            <Container className='min-height-fin cont-width mx-auto mt-2'>
                <h3 className='ml-3'>Finished Items</h3>
                <div className='mx-auto overflow-fin border' >
                    {doneList}
                </div>  
                           
            </Container>
        )
    }
    
}
