import React, { Component } from 'react';
import TaskList from './TaskList';
import InputContainer from './InputContainer';
//1.render -> static ui define
// /2. identify different variables that 
// can change throughout the life time -> state
// 3. rewrite render using those state variables
// 4. event listener to change the state
export default class Todo extends Component {
    state = {
        taskList: [],
        // currTask : "",
    }

    deleteTask = (id) => {
        // id.preventDefault();
        //current - rest of the task
        let filteredtasks = this.state.taskList.filter((task)=>{
            return task.id !== id;
        })
        this.setState({
            taskList : filteredtasks,
        })
    }
    addTask =  (currTask)=>{
    // currTask.preventDefault();
    // let currTask = this.state.currTask;
    // console.log(currTask)
    // let tempArr = this.state.taskList;
    // for(let i=0 ; i < this.state.taskList.length ; i++){
    //     tempArr.push(this.state.taskList[i]);
    // }
    // tempArr.push(currTask);
        
               //or
               
            let tempArr = [...this.state.taskList , {task: currTask , id: this.state.taskList.length }]
            this.setState({
                taskList : tempArr,
                // currTask : "",
            })   
    }
   
    render() {
        return (
        //     <div>
        //         {console.log(this.state.taskList)}
        //       <div className="input-container">
        //           <form onSubmit={this.addTask} >
        //           <input type="text" value={this.state.currTask}

        //            onChange={this.handleCurrTask} />
        //           <button >Submit</button>
        //           </form>
               
        //    </div>

          /* Passing Props to children component */
          
             <div>
         <InputContainer addTask={this.addTask}></InputContainer>

           <TaskList  taskList = {this.state.taskList}
                      deleteTask = {this.deleteTask}>
             </TaskList>
                </div>
           )
    }
}
{/* <div>
{console.log(this.state.taskList)}
<div className="input-container">
  <form onSubmit={this.addTask} >
  <input type="text" value={this.state.currTask}

   onChange={this.handleCurrTask} />
  <button >Submit</button>
  </form>

</div> */}


