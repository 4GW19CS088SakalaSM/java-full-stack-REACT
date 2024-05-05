import { useSelector } from "react-redux";
import AddEmp from "./AddEmp";
import EmpList from "./EmpList";


const Employee = () => {


    return (
        <>
            <h1>Employee Component</h1>
            <AddEmp />
            <EmpList />
        </>
    );
};

export default Employee;


// import { useState } from "react";
// import EmpList from "./EmpList";
// import AddEmp from "./AddEmp";

// const Employee =()=>{

//     // const employee ={
//     //     id: 101,
//     //      salary: 50000,
//     //      FirstName:"sonu",
//     //      phone:""

//     // }

//     // let firstName = '';
//     const [firstName,setFirstName] = useState('');
//     const handleChange =(evt)=>{
//         console.log(evt.target.name)
//         console.log(evt.target.value)
//         //firstName=evt.target.value;
//         setFirstName(evt.target.value);
//     };
    
//     return(
//         <>
//         <h1>Employee component</h1>
//         <p>employee component</p>
//         <p>Employee name {firstName}.</p>
//         <form>
//             <input type="text"  name="firstName" value={firstName} onChange={handleChange}/>
//         </form>
//         <AddEmp/>
//         <EmpList/>
//         {/* <p>Employee salary {employee.salary}.</p>
         
//         {
//             employee.phone &&
//                     <p>emp primary phone no {employee.phone}</p>


//         } */}
//         </>
//     )

// }

// export default Employee;