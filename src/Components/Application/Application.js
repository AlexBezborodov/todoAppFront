import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import AddIitem from '../To-do-list/Add-item/Add-item';
import ToDoList from '../To-do-list/To-do-list';
import FinishedItems from '../To-do-list/Finished-items/FinishedItems';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class Application extends Component {
  
  maxId = 100;

  state = {
    todoData: [
      {title: 'Create front', description: 'Need to create to-do app front part', priority: 'High', deadline: '14/10/2020', un: 1, checked: false},
      {title: 'Create back', description: 'Need to create to-do app backend part inter', priority: 'Medium', deadline: '14/10/2020', un: 2, checked: false},
      {title: '3', description: 'Need to test to-do app', priority: 'Low', deadline: '14/10/2020', un: 3, checked: false},
      {title: '4', description: 'send full project', priority: 'High', deadline: '14/10/2020', un: 4, checked: false},
      {title: 'Create front', description: 'Need to create to-do app front part', priority: 'High', deadline: '14/10/2020', un: 5, checked: true},
      {title: 'Create back', description: 'Need to create to-do app backend part', priority: 'Medium', deadline: '14/10/2020', un: 6, checked: false},
      {title: '3', description: 'Need to test to-do app', priority: 'Low', deadline: '14/10/2020', un: 7, checked: true},
      {title: '4', description: 'send full project', priority: 'High', deadline: '14/10/2020', un: 8, checked: false}
    ],
    fullName: {name:'Oleksandr', surname: 'Bezborodov'},
    checked: false,
    term: ''    
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.un === id);
      const newtodoData = [...todoData.slice(0, idx), ...todoData.slice( idx + 1)]
      return {
        todoData: newtodoData 
      }; 
    });
  };
  addItem = (title, description = 'bla bla bla', priority = 'medium',deadline) => {  

    const newItem = {
        title, 
        description, 
        priority,
        deadline,
        un: this.maxId++,
        checked: false
      };
    this.setState(({todoData}) =>{
      const newItemAddedArr = [...todoData, newItem];
    return {
      todoData: newItemAddedArr
    }
    });

  };

  onToggleDone = (id) => {
    this.setState (({todoData}) => {
      const idx = todoData.findIndex((el) => el.un === id);
      const oldItem = todoData[idx];
      const newObjectItem = {...oldItem, checked: !oldItem.checked};
      const newData = [...todoData.slice(0, idx), newObjectItem, ...todoData.slice( idx + 1)]
      return {
        todoData: newData
      }
    });  
  }
  
  searchChange = (term) => {
   this.setState({ term }); 
  }
  search(items, text) {
    if (text.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(text.toLowerCase()) > -1 ; 
    });
    
  }
  
  render() {
    const { todoData,term } = this.state;
    const searchResult = this.search(todoData,term);
    const { name, surname } = this.state.fullName; 
    const done = this.state.todoData.filter((el) => el.checked && el.priority === 'High' ).length 
    const highPriorityCount = this.state.todoData.filter((el) => el.priority === 'High' ).length - done;
    console.log('this props in application',this.props);
    return (
      <div className='width mx-auto'>
       <Header name={ name } surname={ surname } counter={ highPriorityCount }/>
        <div>
          <SearchPanel label='find everything' searchChange={this.searchChange}/>
          
          <ToDoList  
            data={searchResult}
            onDelete={this.deleteItem}
            onEdit={(id)=> console.log('edited', id)}
            onToggleDone={this.onToggleDone}
          />
          <FinishedItems 
              data={searchResult}
              onDelete={this.deleteItem}
              onEdit={(id)=> console.log('edited', id)}
              onToggleDone={this.onToggleDone}
          />
          <AddIitem  
          label='Add your task'
          onItemAdded = {this.addItem}
          /> 
        </div>
       
      </div>
    );
  }
  
}


