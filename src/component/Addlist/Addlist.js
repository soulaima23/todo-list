import React ,{Component} from 'react';
import './Addlist.css';
;

class Addlist extends Component {
  state={
    name:'',
    age:'',
  }
  handleChange =(e)=>{
    this.setState ({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e) =>{
    e.preventDefault();
    this.props.addItem(this.state)
    this.setState({
      age:'',
      name:''
    })

  }

  render (){
  return (
    
    <div> 
      <form onSubmit={this.handleSubmit} className='item'>
          <input type="text" placeholder='enter name ....' id='name' onChange={this.handleChange} value={this.state.name}></input>
          <input type="number" placeholder='age' id='age' onChange={this.handleChange} value={this.state.age}></input>
          <input type='submit' value='add'></input>

      </form>
    </div>
    )
}
}

export default Addlist;

