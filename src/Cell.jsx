import React from "react";
import "./Cell.css"

const Cell = ({changeState, state, x, y}) => {
    return (
        <div onClick={changeState} className={state ? "Cell Off" : "Cell On"}>
            ({x},{y})
        </div>
    )
}

export default Cell;