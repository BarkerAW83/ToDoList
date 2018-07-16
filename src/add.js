import React from 'react';
import axios from 'axios';

class Add extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      addTaskValue: ''
    }
    this.handleAddChange = this.handleAddChange.bind(this)
    this.handleAddSubmit = this.handleAddSubmit.bind(this)
  }
  handleAddChange(event){
    this.setState({addTaskValue: event.target.value})
  }
  handleAddSubmit(event){

    axios.post('/todos', {
        task: this.state.addTaskValue,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleAddSubmit}>
        <label>
          Add Task:
          <input type="text" value={this.state.addValue} onChange={this.handleAddChange}/>
          </label>
        </form>
      </div>
    );
  }
}

export default Add;