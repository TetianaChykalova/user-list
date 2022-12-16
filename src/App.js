import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import './App.css'

function App(props) {
    // console.log(props.data.registerUserToFirebase)

    return (
        <div>

            <Header/>
            <main>
                <Form users={props.store} data={props.data}/>
                <Users users={props.store} />
            </main>

        </div>
    );
}

export default App;
