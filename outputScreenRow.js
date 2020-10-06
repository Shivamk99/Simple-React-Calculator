import React from "react"

const OutputScreenRow = () => {
    return (
        <div className = "outputscreenRow"> 
            <input type = "text" readonly value = {'props.value'}/>
        </div>
    )
}
export default OutputScreenRow