import React from 'react'

const Component = props => {
    const {name,arr,dobj} = props
    return (
        <div>
            <h1>{name}</h1>
            <h1>{arr[0]}</h1>
           <h1>{dobj.friends[0]}</h1>
           <h1>{props.yourfunction()}</h1>
        </div>
    )
}

export default Component
