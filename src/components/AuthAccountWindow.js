import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {NavDropdown} from "react-bootstrap";
import {connect} from 'react-redux'
import AuthorizationService from "../services/authorizationService";
import {setUnauthorized} from "../actions";


class LegacyAuthAccountWindow extends Component{

    constructor(props){
        super(props);
        this.sendReq = this.sendReq.bind(this);
        this.logoutReq = this.logoutReq.bind(this);
        this.something = this.something.bind(this);
    }
    sendReq(e){

    }

    logoutReq(e){
        AuthorizationService.logoutMethod()
            .then((res) => {
                this.props.unAuthorize();
                if(res.success){
                    alert('Unauthorized')
                } else {
                    alert(res.reason);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }
    something(){
        alert(this.props.isAuthorized + " " + this.props.email);
    }
    render() {
        const {t, email} = this.props;
        return(
            <NavDropdown title={t('account')} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={this.sendReq}>{email}</NavDropdown.Item>
                <NavDropdown.Item onClick={this.something}>Is authorized {this.props.isAuthorized.toString()}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.logoutReq}>{t('logout')}</NavDropdown.Item>
            </NavDropdown>

        )
    }
}
const mapStateToProps = function(store) {
    return {
        isAuthorized: store.authorizedState.isAuthorized,
        email: store.userdataState.email
    };
};
const mapDispatchToProps = function(dispatch) {
    return {
        unAuthorize: () => dispatch(setUnauthorized()),
    };
};

const AuthAccountWindow = withTranslation()(LegacyAuthAccountWindow);
export default connect(mapStateToProps, mapDispatchToProps)(AuthAccountWindow);
