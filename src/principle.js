import React, { useState } from "react"
const Principle=()=>{
const [num1,setNum1]=useState()
const [num2,setNum2]=useState()
const [num3,setNum3]=useState()
const [update,setUpdate]=useState()

const changehandler1=(e)=>{
     setNum1(e.target.value)
}
 const changehandler2=(e)=>{
    setNum2(e.target.value)
 }
 const changehandler3=(e)=>{
     setNum3(e.target.value)
 }
 const buttonhandler=(e)=>{
   
    setUpdate((num1 * num2*num3)/100)

 }
// switch(e.target.name){
//     case "Principle":
//     console.log(e.taget.value);
//     setNum1(e.target.value);
//     break;
//     case "time":
//         console.log(e.target.value);
//         setNum2(e.target.value);
//         break;
//         case "intrest":
//             console.log(e.target.value);
//             setNum3(e.target.value);
//             break;
//             default

// }
const buttonReset=(e)=>{
    setNum1(0);
    setNum2(0);
    setNum3(0);
    setUpdate(0);
}



return(
    <div><center>
       <label>principle:</label> <input type="value" name="principle" onChange={changehandler1} value={num1}></input><br></br>
       <label>tenure:</label> <input type="value" name="time" onChange={changehandler2} value={num2}></input><br>
       </br>
       <label>rate of intrest:</label> <input type="value" name="intrest" onChange={changehandler3} value={num3}></input><br></br>
       <button onClick={buttonhandler}>calculate</button>
       <button onClick={buttonReset} >reset</button>
       <p><input type="text"defaultValue={update}></input></p>
       </center>
    </div>
)
}
export default Principle;