import React, {useState} from 'react'

const Form = props => {
    return(
        <form>
            <label> Name: </label>
                <input
                type="text"
                />
                
                <label> Email: </label>
                <input
                type="text"
                />

                <label> Role: </label>
                <input
                type="text"
                />
        </form>
    )
}

export default Form;