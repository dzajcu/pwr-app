import React, {useState} from "react";
export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Functionality after submitting
    const handleSubmit = (e) => {
        //Prevents page refresh
        e.preventDefault();
        //Prints data
        console.log(username);
        console.log(password);
        //Clears imput
        setUsername('');
        setPassword('');
    }

    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name = "username"/>
            <label htmlFor="password">password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name = "password"/>
            <button type="submit">Zaloguj się</button>
        </form>
        <button className="linking" onClick={() => props.onFormSwitch('register')}>Nie posiadasz konta? Zarejestruj się tutaj.</button>
        </div>
    )
}