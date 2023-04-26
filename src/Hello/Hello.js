import React, { useState } from 'react';
import "./Hello.css"

const SayHello = () => {
    //const [name, setName] = useState("skillhub");
    const[count,setCount]=useState(0)

    // const zero=()=>{
    //     setCount(count)
    // }
    return (
        <div>
            <center>
               <h1>{count}</h1>
               <button className='increment' onClick={()=>setCount(count+1)}>+</button>
               <button className='reset' onClick={()=> setCount(0)}>Reset</button>
               <button className='decrement' onClick={()=>setCount(count-1)}>-</button>

            </center>
        </div>
    )
}
export default SayHello;