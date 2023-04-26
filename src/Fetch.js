import React, { useEffect, useState } from "react";
const Fetch=()=>{
    // const[data, setData]=useState([]);
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos').then(
      response=>response.json()
    ).then(json=>console.log(json))
    },[])
    return(
        <div>
           <h1>heading</h1>
        </div>
    )
    

}
export default Fetch;