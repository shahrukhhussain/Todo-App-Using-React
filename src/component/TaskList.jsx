import React, { Component } from 'react'
// export default class TaskList extends Component {


class TaskList extends Component {

    render() {
        return (
            <div className="task-list">
            <ul>
                {this.props.taskList.map((taskObj)=> {
                    return (
                        <li className="tasklist" key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick= {()=> { this.props.deleteTask(taskObj.id)} }>Delete</button>
                        </li>
                    )
                })}   
                
            </ul>
           
     
        </div>
        )
    }
}
export default TaskList;


//     render() {
//         return (
//             <div className="task-list">
//             <ul>
//                 {this.props.taskList.map((taskObj)=> {
//                     return (
//                         <li className="tasklist" key={taskObj.id}>
//                             <p>{taskObj.task}</p>
//                             <button onClick= {()=> { this.props.deleteTask(taskObj.id)} }>Delete</button>
//                         </li>
//                     )
//                 })}   
                
//             </ul>
           
     
//         </div>
//         )
//     }
// }