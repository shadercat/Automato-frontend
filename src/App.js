import React, {Suspense} from 'react';
import './App.css';
import logo from './logo.svg';
import {createStore, combineReducers} from "redux";
import * as reducers from './reducers';
import {Provider} from "react-redux";
import Loader from "./components/Loader";
import {setAuthorized, setUnauthorized} from "./actions";
import {AuthorizationService} from "./services/authorizationService";
import Routering from "./components/Routering";

// Redux store
const reducer = combineReducers(reducers);
const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loader/>}>
                <Routering/>
            </Suspense>
        </Provider>
    );
}

export default App;
