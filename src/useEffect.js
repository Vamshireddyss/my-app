import React, { useEffect, useState } from "react";
const Effect=()=>{
    const [count ,setCount]=useState(0)
     useEffect(()=>console.log("clicked"),[])

    return(
        <div>
<p>you clicked {count}times</p>
<button onClick={()=>setCount(count +1)}>clickme</button>
        </div>
    )
}
export default Effect;