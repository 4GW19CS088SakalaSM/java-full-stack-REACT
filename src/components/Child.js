const Child =(props)=>{

    const parentDataInChild =props.parentToChild;

    const childData = 'Monu';

    const passDataToParent = () => {
        console.log(childData);
        // code 
        props.childToParent(childData)
        
    };

    return(
        <>
        <h1>child data</h1>
        <p>Child data in child component: {childData}</p>
        <p>parent data in child: {parentDataInChild}</p>
        <button onClick={passDataToParent} >Pass Data to Parent</button>

        </>
    )
}
export default Child;