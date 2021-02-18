import React, { Component } from 'react'

 class Welcome extends Component {
    render() {
        const {name,arr,dobj} = this.props
       // const {state1, state2} = this.state we can destructure state also like this 
        return (
            <div>
                <h1>{name}</h1>
            <h1>{arr[1]}</h1>
           <h1>{dobj.friends[2]}</h1>
           {/* <h1>{props.yourfunction()}</h1> */}
            </div>
        )
    }
}

export default Welcome
