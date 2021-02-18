import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super()
        this.state ={message:'hello'}
        //this.clickHandler = this.clickHandler.bind(this) it is constructor Eventbind 
    }
     clickHandler(){
        this.setState({message:'goodbye'})
    } 
     clickHandler = () => {this.setState({message:'goodbye!'})} 
    /*by using arrow function outside of onclick event */
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={() => this.clickHandler() }>click</button> arrow fuction inside of event */}
                <button onClick={this.clickHandler}>click</button> 
                
            </div>
        )
    }
}

export default EventBind
