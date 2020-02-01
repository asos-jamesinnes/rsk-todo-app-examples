import React from 'react'
class StateChange extends  React.Component{
    constructor(){
        super()
        this.state={
            value: 0
        }
        this.Calculate=this.Calculate.bind(this)
        this.Double=this.Double.bind(this)
    }
    Calculate(){
        
        this.setState(prevState =>{
            return{
                value : prevState.value+1

            }        
        })
    }

    Double(){
        
        this.setState(prevState =>{
            return{
                value : prevState.value+2

            }        
        })
    }
render(){
 
    return(
        <div>
    <div id="show" style={{color : "red"}}><h1>{this.state.value}</h1></div>
    <div><button type="submit" onClick={this.Calculate}>Increase</button></div>
    <div><button type="submit" onClick={this.Double}>Double</button></div>
    </div>
    )
}
}
export default StateChange;