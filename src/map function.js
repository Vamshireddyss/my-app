import React from "react";
function Map() {
    // const arr = ["reactjs", "angular js", "typeScript", "bootStrap"]
    // return (
    //     <div>{
    //         arr.map(
    //             (value, index) => <li key={index}>{value}</li>
    //         )
    //     }
    //     </div>

    // )
    // const arr = [
    //     {
    //         id: 1,
    //         title: "reactjs"
    //     },
    //     {
    //         id: 2,
    //         title: "angular js"
    //     },
    //     {
    //         id: 3,
    //         title: "typescript",
    //     },
    //     {
    //         id: 4,
    //         title: "bootstrap"
    //     }
    // ]
    // return (
    //     <div>
    //         {
    //             arr.map(
    //                 (value) => <li key="value">{value.title}</li>
    //             )
    //         }
    //     </div>
    // )
    // const names=['vamshi','vinay','vikas','naveen','raghu'];
    // const filtered=names.filter(name=>name.includes ('h'))
    // return(
    //     <div>
    //     {
    
    //     filtered.map(item=><li>{item}</li>)
    //     }
    //     </div>

    //);
    const arr=[10,30,40,60,70,80]
    const filtered=arr.filter(item=>item>(60))
    return(
        <div>
            {
                filtered.map(item=><li>{item}</li>)
            }
        </div>
    )
}
export default Map;