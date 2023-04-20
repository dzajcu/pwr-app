import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { PostForm } from "./components/PostForm";
import { Posts } from "./components/Posts";
import { MainPage } from "./components/MainPage";
import React, { useState, useEffect } from "react";

function App() {
    useEffect(() => {
        fetch("http://localhost:8080/content", {
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
                setPosts(data);
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
            });
    }, []);

    
    const [posts, setPosts] = useState([]);
    const [currentForm, setCurrentForm] = useState("login");
    const toogleForm = (formName) => {
        setCurrentForm(formName);
    };

    const addPostHandler = (post) => {
        setPosts((prevPosts) => [post, ...prevPosts]);
    };

    return (
        <div className="App">
            {/* currentForm === "login" ? <Login onFormSwitch={toogleForm}/> : <Register onFormSwitch={toogleForm}/> */}
            {/* <Header/> */}
             <MainPage>
                <PostForm onAddPost={addPostHandler}/>
                <Posts postsList={posts} />/
            </MainPage> 
        </div>
    );
}

export default App;
