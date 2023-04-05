import {Register} from "./components/Register";
import {Login} from "./components/Login";
import {Header} from "./components/Header";
import React, {useState} from "react";

function App() {
    const [currentForm, setCurrentForm] = useState('login');
    //Toogles forms
    const toogleForm =(formName) => {
        setCurrentForm(formName);
    }
  return (
    <div className="App">
         {
            //Displays current form
            currentForm === "login" ? <Login onFormSwitch={toogleForm}/> : <Register onFormSwitch={toogleForm}/>

        } 
        
    </div>
  );
}

export default App;
