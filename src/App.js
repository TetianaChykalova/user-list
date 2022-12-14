import './App.css';
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Add from "./components/Add/Add";

function App(props) {
    // console.log(props.data.registerUserToFirebase)

    return (
        <div>

            <Header/>
            <Add users={props.store} data={props.data}/>
            <Users users={props.store} />

        </div>
    );
}

export default App;
