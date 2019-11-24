import React, {Component} from "react";
import Header from "./Header";
import Home from "./Home";
import RedirectWrapper from "./RedirectWrapper";
import Workspace from "./Workspace/Workspace";
import Login from "./Login";
import NoFound from "./NoFound";
import Footer from "./Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthorized, setUnauthorized, setUserdata} from "../actions";
import AuthorizationService from "../services/authorizationService";
import DataAccessService from "../services/dataAccessService";


class Routering extends Component{
    render() {
        AuthorizationService.checkLoginMethod()
            .then(async (res) => {
                if(res){
                    this.props.onAuthorized();
                    await DataAccessService.getUserData()
                        .then((res) => {
                            this.props.setUserData(res);
                        });
                } else {
                    this.props.unAuthorized();
                }
            })
            .catch((err) => {
                alert(err);
            });
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <RedirectWrapper path='/workspace' accessible={this.props.isAuthorized} pathname="/login">
                            <Workspace/>
                        </RedirectWrapper>
                        <RedirectWrapper path='/login' accessible={!this.props.isAuthorized} pathname="/workspace">
                            <Login/>
                        </RedirectWrapper>
                        <Route>
                            <NoFound/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        isAuthorized: store.authorizedState.isAuthorized
    };
};
const mapDispatchToProps = function(dispatch) {
    return {
        onAuthorized: () => dispatch(setAuthorized()),
        unAuthorized: () => dispatch(setUnauthorized()),
        setUserData: (data) => dispatch(setUserdata(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Routering);