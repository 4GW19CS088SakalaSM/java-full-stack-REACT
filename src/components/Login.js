import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterLoginMessage, setAfterLoginMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (evt) => {
        console.log(evt.target.value)
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value

        });

    };

    const handleSubmit = (evt) => {
        if (loginData.username === 'sonu' && loginData.password === 'sonu') {
            setAfterLoginMessage(`Hi ${loginData.username}! You've logged in successfully!`);
            alert(`Hi ${loginData.username}! You've logged in successfully!`);
            props.setLoginStatus(true);

            setLoginData({ username: '', password: '' });
            navigate('/home');
        }
        else {
            setAfterLoginMessage(`Invalid credentials!`);
            alert(`Invalid credentials!`);
            props.setLoginStatus(false)
            setLoginData({ username: '', password: '' });
        }
        evt.preventDefault();
    };

    return (
        <>
            <h1>Login</h1>
            <p>login here</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={loginData.username} onChange={handleChange} />
                <input type="password" name="password" value={loginData.password} onChange={handleChange} />
                <input type="submit" value="Login" />
                <p>emp {loginData.username}</p>
                <p>pass {loginData.password}</p>
            </form>
            <>
                <p>{afterLoginMessage && afterLoginMessage} </p>
            </>
        </>
    )

}


export default Login;