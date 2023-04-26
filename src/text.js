import React, { useState } from "react"
const Testing=()=>{
    const [text, setText]=useState('')
    const changehandler=(e)=>{
        setText(e.target.value)
    }

    return(
        <div>
            <center>
            <input type="text" onChange={changehandler} value={text}></input>
            <p>{text}</p>
            </center>
        </div>
    )
}
export default Testing ;