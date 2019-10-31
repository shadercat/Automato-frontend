import React, {Suspense} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Workspace from "./components/Workspace";
import NoFound from "./components/NoFound";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import logo from './logo.svg';

const Loader = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div>loading...</div>
        </div>
    </div>
);

function App() {
    return (
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
                        <Route>
                            <NoFound/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
