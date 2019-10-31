import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/styles.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {withTranslation} from 'react-i18next';

class LegacyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "Language",
        };
        this.changeLanguage.bind(this);
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
                        <NavDropdown title={t('account')} id="basic-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
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