// import React from "react";
// function User(props){
//     return(
//         <div>
//             <h1>name:{props.name}</h1>
//             <h2>age:{props.age}</h2>
//             <h2>place:{props.place}</h2>
//         </div>
//     )
// }
import React from "react";
class User extends React.Component {
    render(){

    return(
        <div>
           <h1>name:{this.props.name}</h1>
            <h2>age:{this.props.age}</h2>
             <h3>place:{this.props.place}</h3>
         
     </div >

    )
    }
}

export default User;