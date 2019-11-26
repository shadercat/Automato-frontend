import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import PropTypes from "prop-types";


class LegacyUnauthorizedWindow extends Component {

    constructor(props){
        super(props);
        this.something = this.something.bind(this);
    }

    static propTypes = {
        t: PropTypes.func.isRequired
    };
    something(){
        alert(this.props.isAuthorized);
    }
    render() {
        const {t} = this.props;
        return(
            <NavDropdown title={t('account')} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/authorization/signin">{t('login')}</NavDropdown.Item>
                <NavDropdown.Item onClick={this.something}>Something {this.props.isAuthorized.toString()}</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>

        )
    }
}
const mapStateToProps = function(store) {
    return {
        isAuthorized: store.authorizedState.isAuthorized,
    };
};

const UnauthorizedWin = withTranslation()(LegacyUnauthorizedWindow);
export default connect(mapStateToProps)(UnauthorizedWin);
