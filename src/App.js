import React, { Component } from 'react'
import Todolist from './component/Todolist/Todolist.js';
import Addlist from './component/Addlist/Addlist';
import  './App.css';
;

class App extends Component{
  state ={
    items:[
      {id:1,name:'Soulayma',age:24},
      {id:2,name:'Chayma',age:22},
      {id:3,name:'Med',age:22},
      {id:5,name:'Abdoi',age:22}

    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter (item =>{
      return item.id !== id
  })
    this.setState({items})  }



 addItem=(item) =>{
   item.id=Math.random()
   let items=this.state.items;
   items.push(item);
   this.setState({items})

 }
render () {
  return (
    <div className="App">
      <h1 className='item'>To Do List</h1>
<Todolist items={this.state.items} deleteItem={this.deleteItem} />  
    <Addlist addItem={this.addItem} />
    </div>
  );
}
}

export default App;
