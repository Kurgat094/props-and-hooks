import React from "react";
const Greeting = (props) => {
    return ( 
            <>
            <h1 className="greeting-text">Hello, {props.name}!</h1>  
            <h1 className="greeting-text">Age:{props.age}</h1>
            <h1 className="greeting-text">Id: {props.id}</h1>
            </>
            ); 
}
 
export default Greeting;