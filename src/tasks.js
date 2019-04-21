import React from "react";

class Task extends React.Component{
  render(){
    const id = this.props.task._id;
    const name = this.props.task.name;
    const done = this.props.task.done;
    const notes =this.props.task.notes;
    const priority = this.props.task.priority;
    const createdAt = this.props.task.createdAt;
    const updatedAt = this.props.task.updatedAt;
    
    return(
      <div className="task">
        <div className ="id">
        ID Number: {id}
        </div>
        <div className ="name">
        Task name: {name}
        </div>
        <div className = "done">
        Status: {done}
        </div>
        <div className = "notes">
        Notes: {notes}
        </div>
        <div className ="priority">
        Priority: {priority}
        </div>
        <div className = "createdAt">
        Created at: {createdAt}
        </div>
        <div className = "updatedAt">
        Updated at: {updatedAt}
        </div>
        <br></br>
      </div>

    );
  }


}

export default Task;
