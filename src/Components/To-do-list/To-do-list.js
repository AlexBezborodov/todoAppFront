import React, { Component } from 'react';
import ToDoListItem from './To-do-list-item/To-do-list-item';
import { Container } from 'react-bootstrap';

import './To-do-list.css';
export default class ToDoList extends Component {


    render () {
        const{onDelete,data, onEdit, onToggleDone} = this.props
        const listOfItems = data.filter((el) => el.checked === false);
        const activeList = listOfItems.map((item,id) => {
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
            <Container className='min-height cont-width mx-auto my-2 border-bottom'>
                <h3 className='ml-3'>Active Tasks</h3>
                <div className='mx-auto overflow border' >
                    {activeList}
                </div>
                           
            </Container>
        )
    }
    
}
