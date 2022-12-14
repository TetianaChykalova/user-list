import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./bll/state";
import {data} from "./service/data.service";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyANVMlwzToBPWT8MyNtZX0f_gAnXxY6FWo",
//     authDomain: "newage-users-chykalova.firebaseapp.com",
//     projectId: "newage-users-chykalova",
//     storageBucket: "newage-users-chykalova.appspot.com",
//     messagingSenderId: "547667421944",
//     appId: "1:547667421944:web:f2cf4d7c0782738ce4290d",
//     measurementId: "G-T8Z0DBC1FJ"
// };
//
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App store={store} data={data}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store);
store.subscriber(rerenderEntireTree)

