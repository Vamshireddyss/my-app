import React, { useState } from "react";
const Multifun = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [answer, setAnswer] = useState();
    const changehandler1 = (e) => {
        setNum1(e.target.value)
    }
    const changehand2 = (e) => {
        setNum2(e.target.value)
    }
     const button = () => {
         const result=num1 * num2;
         console.log(result);
         setAnswer(result);
     }





return (
    <div >
        <center>
       <p> Number1 : <input type="number" onChange={changehandler1} ></input></p>
        <p> Number2: <input type="number" onChange={changehand2}></input></p>
        <p> <button onClick={button}>calculate</button></p>
        <p>Result : <input type="number" value={answer}/></p>
        </center>

    </div>
)
    
}
export default Multifun;