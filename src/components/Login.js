import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {Form, Button} from "react-bootstrap";
import {AuthorizationService} from "../services/authorizationService";
import {setAuthorized} from "../actions";
import {connect} from "react-redux";

class LegacyLogin extends Component{

    constructor(props){
        super(props);
        this.state = {
            validate: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const args = {
                email: form.elements.email.value.trim(),
                password: form.elements.password.value
            };
            AuthorizationService.loginMethod(args)
                .then((res) => {
                    this.props.onAuthorized();
                    alert(res.auth);
                })
                .catch((err) =>{
                    alert(err);
                });
        }
        this.setState(prevState => ({
            validate: true
        }));
        event.preventDefault();
    };
    render() {
        const {t} = this.props;
        return(
            <div style={{display: "flex", alignItems: "center", height: "100vh"}}>
                <div style={{margin: "auto", width: "100%", maxWidth: 300, padding: 15}}>
                    <Form noValidate validated={this.state.validate} onSubmit={this.handleSubmit}>
                        <h2 style={{width: "100%", textAlign: "center"}}>
                            {t('signIn')}
                        </h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{t('emailAddress')}</Form.Label>
                            <Form.Control
                                required
                                name='email'
                                type="email"
                                placeholder={t('enterEmail')} />
                            <Form.Control.Feedback type="invalid">
                                {t('invalidEmail')}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder={t('password')} />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
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
    }
};

const Login = withTranslation()(LegacyLogin);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
