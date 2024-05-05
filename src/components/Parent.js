import Child from "./Child"
import { useState } from "react";

const Parent =()=>{
    const parentData ='sonu'
    const [childDataInParent, setChildDataInParent] = useState('');

    const receiveDataFromChild = (data) => {
        console.log(childDataInParent);
        //code 
        setChildDataInParent(data)
    };

    return(
        <>
        <h1>parent component</h1>
        <p>Parent data in parent component:{parentData}</p>

        <p>parent  data in child component {childDataInParent}</p>
        
        <Child childToParent={receiveDataFromChild} parentToChild={parentData} />

        </>
    )
}

export default Parent;