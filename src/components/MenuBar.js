// MenuBar.js
import React from "react";
import { Link } from "react-router-dom";

const MenuBar = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    {props.loginStatus ? (
                        <>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/emp">Employee</Link></li>
                            <li><Link to="/parent">Parent</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default MenuBar;

// import { Link , useLocation} from "react-router-dom";


// const MenuBar =()=>{
//     return(
//         <>
//         <h1>Menu</h1>

//         <ul>
//             <li><Link to={'/'}>home</Link></li>
//             <li><Link to={'/Login'}>login</Link></li>
//             <li><Link to={'/Employee'}>employee</Link></li>
//             <li><Link to={'/Parent'}>parent</Link></li>
//             <li><Link to={'/Login'}>logout</Link></li>

//         </ul>
//         </>
//     )
// }

// export default MenuBar;