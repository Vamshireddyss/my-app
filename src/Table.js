import React, {useState, useEffect } from "react";
const Table=()=>{
    const[data, setData]=useState([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(
        response=> response.json()

    ).then(json=>setData(json))
}, [])
return
<div>
    <center>
        <table>
            <tr>
                 <th>id</th>
                 <th>name</th>
                 <th>username</th>
                 <th>email</th>
                 <th>password</th>
            </tr>
            {data.map(item=><tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
            </tr>)}
        </table>
    </center>
</div>
}
export default Table;