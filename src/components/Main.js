import React, {Component} from "react";
import Header from "./Header";
import Home from "./Home";
import RedirectWrapper from "./RedirectWrapper";
import Workspace from "./Workspace/Workspace";
import Login from "./Authorization/Login";
import NoFound from "./NoFound";
import Footer from "./Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthorized, setUnauthorized, setUserdata} from "../actions";
import AuthorizationService from "../services/authorizationService";
import DataAccessService from "../services/dataAccessService";
import Loader from "./Loader";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true
        }
    }
    componentDidMount() {
        AuthorizationService.checkLoginMethod()
            .then(async (res) => {
                if(res){
                    this.props.onAuthorized();
                    await DataAccessService.getUserData()
                        .then((res) => {
                            this.props.setUserData(res);
                            this.setState({isFetching: false});
                        });
                } else {
                    this.props.unAuthorized();
                    this.setState({isFetching: false});
                    return false
                }
            })
            .catch((err) => {
                this.setState({isFetching: false});
                alert(err);
            });
    }

    render() {
        if (this.state.isFetching) {
            return <Loader/>
        }
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <RedirectWrapper path='/workspace' accessible={this.props.isAuthorized}
                                         pathname="/authorization/signin">
                            <Workspace/>
                        </RedirectWrapper>
                        <RedirectWrapper path='/authorization' accessible={!this.props.isAuthorized}
                                         pathname="/workspace">
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);