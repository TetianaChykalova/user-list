import React from "react";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import './App.css'


export const Context = React.createContext({})

function App(props) {
    console.log(props)

    return (
        <Context.Provider value={props}>
            <div>

                <Header/>
                <main>
                    <Form users={props.store} data={props.data}/>
                    <Users/>
                </main>

            </div>
        </Context.Provider>
    );
}

export default App;
