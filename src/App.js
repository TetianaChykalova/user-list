import React from "react";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import './App.css'


export const Context = React.createContext({})

function App(props) {

    return (
        <Context.Provider value={props}>
            <div>

                <Header/>
                <main>
                    <Form/>
                    <Users/>
                </main>

            </div>
        </Context.Provider>
    );
}

export default App;
