import React from "react"
import OutputScreenRow from "./outputScreenRow"

const OutputScreen = (props) => {
    return(
        <div className = "Screen">
            <OutputScreenRow value = {'props.question'}/>
            <OutputScreenRow value = {'props.answer'}/>
        </div>
    )
}
export default OutputScreen