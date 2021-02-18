import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'I am hero',
        }

     }
     changemessage(){
        this.setState({
            message:'you are hero',
        })
     }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={()=>{this.changemessage()}} >ClickMe</button>
            </div>
        )
    }
}

export default Message
