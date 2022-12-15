import './App.css';
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Form from "./components/Add/Form";

function App(props) {
    // console.log(props.data.registerUserToFirebase)

    return (
        <div>

            <Header/>
            <Form users={props.store} data={props.data}/>
            <Users users={props.store} />

        </div>
    );
}

export default App;
