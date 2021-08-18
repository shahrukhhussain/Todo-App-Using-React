import React, { Component } from 'react'


class InputContainer extends Component {
    state = {
        currTask : "",
    }
    handleCurrTask = (e)=>{
        let currValue = e.target.value;
        // console.log(currValue)
        this.setState({
            currTask : currValue
        })
     }

     sendCurrentTaskToparent = (e)=>{
         e.preventDefault();
         this.props.addTask(this.state.currTask);
         this.setState({
             currTask : ""
         })
     }

     render(){
         return(
            <div className="input-container">
                
            <form onSubmit={this.sendCurrentTaskToparent}>

            <input type="text" value={this.state.currTask}
                onChange={this.handleCurrTask} />

            <button >Submit</button>
            </form>
          
          </div>
        //     <div className="input-container">
                
        //     {/* <form  > */}

        //     <input type="text" value={this.state.currTask}
        //         onChange={this.handleCurrTask} />

        //     <button onClick={this.sendCurrentTaskToparent}>Submit</button>
        //     {/* </form> */}
          
        //   </div>
         )
     }
}
export default InputContainer;
