import React, { useState } from "react";
function Submit() {

    const [data, setData] = useState({
        username: '',
        password: '',
    })
    const { username, password } = data;
    const changehandle = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandler = e => {
        e.preventDefault(); //action pending or triggering lo unte cancel cheyaniki mandatory
        console.log(data);
    }

    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="username" name="username" value={username}
                        onChange={changehandle} /><br />
                    <input type="text" placeholder="password" name="password" value={password}
                        onChange={changehandle} /><br />
                    <input type="submit" name="submit" />
                </form>
            </center>
        </div>
    )
}
export default Submit;