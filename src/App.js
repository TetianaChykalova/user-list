import './App.css';
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Add from "./components/Add/Add";

function App(props) {
    return (
        <div>

            <Header/>
            <Add users={props.store} />
            <Users users={props.store} />

        </div>
    );
}

export default App;
