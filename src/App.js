import React, {Suspense} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Workspace from "./components/Workspace";
import NoFound from "./components/NoFound";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import Login from "./components/Login";
import {createStore, combineReducers} from "redux";
import * as reducers from './reducers';
import {Provider} from "react-redux";
import {setAuthorized, setUnauthorized} from "./actions";
import {AuthorizationService} from "./services/authorizationService";

const reducer = combineReducers(reducers);
const store = createStore(reducer);


const Loader = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div>loading...</div>
        </div>
    </div>
);

function App() {
    AuthorizationService.checkLoginMethod()
        .then((res) => {
            if(res){
                store.dispatch(setAuthorized());
            } else {
                store.dispatch(setUnauthorized());
            }
        })
        .catch((err) => {
            alert(err);
        });
    return (
        <Provider store={store}>
            <Suspense fallback={<Loader/>}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path='/'>
                                <Home/>
                            </Route>
                            <Route path='/workspace'>
                                <Workspace/>
                            </Route>
                            <Route path='/login'>
                                <Login/>
                            </Route>
                            <Route>
                                <NoFound/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Suspense>
        </Provider>
    );
}

export default App;
