import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import AuthorizationService from "../../../services/authorizationService";
import {setUnauthorized} from "../../../actions";
import PropTypes from "prop-types";


class LegacyUnauthorizedWindow extends Component {

    constructor(props){
        super(props);
        this.sendReq = this.sendReq.bind(this);
        this.logoutReq = this.logoutReq.bind(this);
        this.something = this.something.bind(this);
    }

    static propTypes = {
        t: PropTypes.func.isRequired
    };
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
        alert(this.props.isAuthorized);
    }
    render() {
        const {t} = this.props;
        return(
            <NavDropdown title={t('account')} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/authorization/signin">{t('login')}</NavDropdown.Item>
                <NavDropdown.Item onClick={this.sendReq}>Another action</NavDropdown.Item>
                <NavDropdown.Item onClick={this.something}>Something {this.props.isAuthorized.toString()}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.logoutReq}>{t('logout')}</NavDropdown.Item>
            </NavDropdown>

        )
    }
}
const mapStateToProps = function(store) {
    return {
        isAuthorized: store.authorizedState.isAuthorized,
    };
};
const mapDispatchToProps = function(dispatch) {
    return {
        unAuthorize: () => dispatch(setUnauthorized()),
    };
};

const UnauthorizedWin = withTranslation()(LegacyUnauthorizedWindow);
export default connect(mapStateToProps, mapDispatchToProps)(UnauthorizedWin);
