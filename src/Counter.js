import React,{ useState, useEffect} from "react";

const Counter = () => {
    const[count,setCount]=useState(0);
    useEffect(() =>{
        document.title='You clicked ${count} times';
    },[count]);
    return ( 
        <div className="counter">
            <h1>Reat Hooks: useState and UseEffect</h1>
            <p>You clicked the button {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Here!</button>
        </div>
     );
}
 
export default Counter;