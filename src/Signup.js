import React, { useState } from "react";
function Signup() {
    const [data, setData] = useState({
        username: '',
        password: '',
        confirmPassword: '',


    })
    const { username, email, password, confirmPassword } = data;
    const changeHandle = e => {
       setData ({ ...data, [e.target.name]: [e.target.value] })
    }
    const submitHandler = e => {
        e.preventDefault(); //actio pending or triggering lo unte cancel cheyaniki mandatory
        if(password==confirmPassword){
            console.log(data);
        }
        else{
            console.log("passwordsMismatch")
        }
    }
    return (
        <div>
            <center>
                <form onSubmit={submitHandler} >
                    <input type="text"  name="username" value={username}  onChange={changeHandle}/><br></br>
                    <input type="email"  name="email" value={email} onChange={changeHandle} /><br></br>
                    <input type="password"  name="password" value={password}  onChange={changeHandle}/><br></br>
                    <input type="confirm password"  name="confirmPassword" value={confirmPassword}onChange={changeHandle} /><br></br>
                    <input type="submit" name="submit" />

                </form>
            </center>

        </div>

    )


}
export default Signup;
