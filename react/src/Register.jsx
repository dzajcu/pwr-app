import React, {useState} from "react";
export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    //Functionality after submitting
    const handleSubmit =(e) =>{
        //Prevents page refresh
        e.preventDefault();
        //Prints data
        console.log(email);
        console.log(username);
        console.log(password);
        //Clears input
        setEmail('');
        setUsername('');
        setPassword('');
    }
    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="twójmail@mail.com" id="email" name = "email"/>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" id="username" name = "username"/>
                <label htmlFor="password">password </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name = "password"/>
                <button type="submit">Utwórz konto</button>
            </form>
            <button className="linking" onClick={ () => props.onFormSwitch('login')}>Masz już konto? Zaloguj się tutaj.</button>
        </div>
    )
}