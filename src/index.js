import React from 'react';
import ReactDOM from 'react-dom';
import Add from './add.js'
import axios from 'axios'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      toDoDB: []
    }
    this.getTodos = this.getTodos.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this)
  }
  componentDidMount(){
    this.getTodos();
  }
  getTodos(){
    axios.get('/todos')
      .then((response)=>{
        this.setState({toDoDB: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleTaskClick(key, event){
    axios.delete('/todos', {
        params: {
          _id: key
        }
      })
      .then((response) => {
        this.getTodos(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render(){

    const listItems = this.state.toDoDB.map((item)=>

      <li key={item._id} onClick={()=>this.handleTaskClick(item._id, event)}>{item.task}</li>
    )
    return(
      <div>
        <h1>TO DO LIST</h1>
        <ul>{listItems}</ul>
        <Add/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));

//npm start = starts server/index.js with nodemon
//npm run dev = starts webpack watching the files in development mode (per package.json)
//mongod = runs mongodb (possibly run "killall mongod" first)
//mongo --host 127.0.0.1:27017 = connects mongo to the localhost