import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Page404 from "./Page404";
import Employee from "./Employee";
import Parent from "./Parent"; 
import MenuBar from "./MenuBar";
import Profile from "./Profile";
import Register from "./Register";
import Logout from "./Logout";

const AppRoutes =()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const updateLoginStatus = (status) => {
        console.log(status);
        setIsLoggedIn(status);
    };

    return(
        <>  
        <BrowserRouter>
                <MenuBar loginStatus={isLoggedIn}/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/emp" element={<Employee />} />
                    <Route path="/parent" element={<Parent />} />
                    <Route path="/logout" element={<Logout setLoginStatus={updateLoginStatus} />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login setLoginStatus={updateLoginStatus} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
//     if (isLoggedIn) {
//         return (
//             <>
//                 <BrowserRouter>
//                     <MenuBar loginStatus={isLoggedIn}/>
//                     <Routes>
//                         <Route path="home" element={<Home />} />
//                         <Route path="emp" element={<Employee />} />
//                         <Route path="parent" element={<Parent />} />
//                         <Route path="logout" element={<Logout setLoginStatus={updateLoginStatus} />} />
//                         <Route path="profile" element={<Profile />} />
//                         <Route exact path="/" element={<Login />} />
//                         <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
//                     </Routes>
//                 </BrowserRouter>
                
//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <BrowserRouter>
//                     <MenuBar/>
//                     <Routes>
//                         <Route path="home" element={<Home />} />
//                         <Route path="login" element={<Login setLoginStatus={updateLoginStatus} />} />
//                         <Route path="register" element={<Register />} />
//                         <Route exact path="/" element={<Login />} />
//                         <Route path="*" element={<Page404 loginStatus={isLoggedIn} />} />
//                     </Routes>
//                 </BrowserRouter>
//             </>
//         );
//     }
// };

export default AppRoutes;