import React, { Component } from 'react';
import './App.css';
import Task from './tasks';
class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      tasks:[]
    };
  }



  componentDidMount(){
    const url ="http://devcamp1819b.herokuapp.com/tasks"
    fetch(url)
      .then(results=>{
        return results.json();
      })
      .then((data)=>{
        this.setState({
          tasks:data
        });
      })

  }

  create(){
    fetch('http://devcamp1819b.herokuapp.com/tasks/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})


  }

  render() {
    return (
      <div>
        <div>
          <h1> I really did try my best guys </h1>
        </div>

        <div className ="tasks">
          {this.state.tasks.map((task)=>{
            return <Task task={task}/>
          })}
        </div>

      </div>
    );
  }
}


export default App;
