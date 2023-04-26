import { useState } from "react";

const Todo=()=>{
    const [num1, setNum1]=useState('');
     const[answer, setAnswer]=useState('');
    const changeHandle=(e)=>{
        setNum1(e.target.value)
     const buttonhandler=(e)=>{
    setAnswer
      }   
    }



    return(
        <div>
            <input type="text" onChange={changeHandle} label="name" value={num1}></input>
             <button onClick={buttonhandler} name="button" value={answer}>submut</button>
            <br></br> 
            <p>{num1}</p>
        
        </div>

    )
}

export default Todo;