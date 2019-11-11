import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/styles.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {withTranslation} from 'react-i18next';
import AccountWindow from "./AccountWindow";
import axios from 'axios';
import {Paths, Config} from "../constants/GlobalVal";

class LegacyHeader extends Component {
    constructor(props) {
        super(props);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(lng, e) {
        const {i18n} = this.props;
        i18n.changeLanguage(lng);
    }

    render() {
        const {t} = this.props;
        return (
            <Navbar expand="lg" sticky="top" variant="dark" className="bg-teal" collapseOnSelect={true}>
                <Navbar.Brand as={Link} to="/">Automato</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
                        <Nav.Link as={Link} to="/workspace">{t('workspace')}</Nav.Link>
                        <AccountWindow name="all"/>
                    </Nav>
                    <Nav>
                        <NavDropdown alignRight title={t('language')} id="lang-change">
                            <NavDropdown.Item onClick={this.changeLanguage.bind(this, 'en')}>English</NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={this.changeLanguage.bind(this, 'ua')}>Ukrainian</NavDropdown.Item>
                            <NavDropdown.Item onClick={this.changeLanguage.bind(this, 'ru')}>Russian</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const Header = withTranslation()(LegacyHeader);

export default Header;