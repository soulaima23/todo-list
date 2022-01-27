import React from 'react';
import { render, screen } from '@testing-library/react';

import './Todolist.css';
const todolist = (props) => {
    const {items , deleteItem } =props;
    let length=items.length;
    const ListItems=length?(
        items.map(item=> {
            return (
                <div key={item.id} className='item'>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <button onClick={()=>deleteItem(item.id)}> never </button>
    
                </div>
            )
             
        })
        ) :(
            <p>there is no item to show</p>
        )
    

  return <div className='ListItems'> 
      <div className='item'>
          <span>Name</span>
          <span>Age</span>
          <span>Action</span>


      </div>
      {ListItems}
  </div>;
};

export default todolist;
