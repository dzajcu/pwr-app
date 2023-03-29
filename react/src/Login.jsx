import React, { useState } from "react";
// import 'login.module.css';
export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //Functionality after submitting
    const handleSubmit = (e) => {
        //Prevents page refresh
        e.preventDefault();
        //Prints data
        // console.log(username);
        // console.log(password);

        fetch("http://localhost:8080/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                data.forEach(function (_, i) {
                    if (
                        data[i].username.includes(username) &&
                        data[i].password.includes(password)
                    )
                        console.log("Zalogowano");
                    else console.error("Niepoprawne dane!");
                });
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
            });

        setUsername("");
        setPassword("");
    };

    return (
        <div className="login-container">
            <form className="login-container__form" onSubmit={handleSubmit}>
                <label htmlFor="username">Email address or username</label>

                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Email address or username"
                    id="username"
                />
                <label htmlFor="password">Password</label>

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Password"
                    id="password"
                />
                <button type="submit">Zaloguj się</button>
            </form>
            <button
                className="linking"
                onClick={() => props.onFormSwitch("register")}
            >
                Nie posiadasz konta? Zarejestruj się tutaj.
            </button>
        </div>
    );
};
