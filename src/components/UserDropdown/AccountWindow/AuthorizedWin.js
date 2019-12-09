import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {NavDropdown} from "react-bootstrap";
import {connect} from 'react-redux';
import AuthorizationService from "../../../services/authorizationService";
import {setUnauthorized} from "../../../actions";
import PropTypes from "prop-types";


class LegacyAuthorizedWindow extends Component {
    constructor(props){
        super(props);
        this.logoutReq = this.logoutReq.bind(this);
    }
    static propTypes = {
        t: PropTypes.func.isRequired
    };
    logoutReq(e){
        AuthorizationService.logoutMethod()
            .then((res) => {
                if(res.success){
                    this.props.unAuthorize();
                } else {
                    alert(res.reason);
                }
            })
            .catch((err) => {
                alert(err);
            });
    }
    render() {
        const {t, email} = this.props;
        return(
            <>
                <NavDropdown title={t('account')} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={this.sendReq}>{email}</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.logoutReq}>{t('logout')}</NavDropdown.Item>
                </NavDropdown>
            </>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        // isAuthorized: store.authorizedState.isAuthorized,
        email: store.userdataState.email
    };
};
const mapDispatchToProps = function(dispatch) {
    return {
        unAuthorize: () => dispatch(setUnauthorized()),
    };
};

const AuthorizedWin = withTranslation()(LegacyAuthorizedWindow);
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedWin);
