import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Button, Form} from "react-bootstrap";
import AuthorizationService from "../../services/authorizationService";
import {withRouter} from "react-router";
import {ModalTop, ModalTopBtn} from "../ModalWindow";
import PropTypes from "prop-types";


class LegacySignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            show: false,
            showSuccessModal: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closePasswordModal = this.closePasswordModal.bind(this);
        this.closeSuccessModal = this.closeSuccessModal.bind(this);
        this.linkToSignUp = this.linkToSignUp.bind(this);
    }

    static propTypes = {
        history: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    closePasswordModal() {
        this.setState(prevState => ({
            show: false
        }))
    }

    closeSuccessModal() {
        this.setState(prevState => ({
            showSuccessModal: false
        }))
    }

    linkToSignUp() {
        this.props.history.push('/authorization');
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const args = {
                email: form.elements.email.value.trim(),
                password: form.elements.password.value,
                name: form.elements.name.value
            };
            if (form.elements.password.value === form.elements.password2.value) {
                AuthorizationService.registrationMethod(args)
                    .then((res) => {
                        this.setState(prevState => ({
                            showSuccessModal: true
                        }));
                    })
                    .catch((err) => {
                        alert(err);
                    })
            } else {
                this.setState(prevState => ({
                    show: true
                }))
            }
        }
        this.setState(prevState => ({
            validate: true
        }));
    };

    render() {
        const {t} = this.props;
        return (
            <>
                <ModalTop show={this.state.show} handleClose={this.closePasswordModal}
                          headerText={t('invalidData')} bodyText={t('passDidNotMatch')}
                          closeText={t('close')}/>

                <ModalTopBtn show={this.state.showSuccessModal} handleClose={this.closeSuccessModal}
                             headerText={t('successReg')} bodyText={t('successRegText')}
                             closeText={t('close')} btnText={t('linkToLogin')}
                             handleBtn={this.linkToSignUp}/>


                <div className="pt-4">
                    <Form noValidate validated={this.state.validate} onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>{t('emailAddress')}</Form.Label>
                            <Form.Control
                                required
                                name='email'
                                type="email"
                                placeholder={t('enterEmail')}/>
                            <Form.Control.Feedback type="invalid">
                                {t('invalidEmail')}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>{t('name')}</Form.Label>
                            <Form.Control
                                required
                                name='name'
                                type="text"
                                placeholder={t('enterName')}/>
                            <Form.Control.Feedback type="invalid">
                                {t('invalidName')}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{t('password')}</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder={t('password')}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicRePassword">
                            <Form.Control
                                required
                                name="password2"
                                type="password"
                                placeholder={t('rePassword')}/>
                        </Form.Group>
                        <Button variant="info" type="submit" block>
                            {t('submit')}
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}

const SignUp = withTranslation()(LegacySignUp);
export default withRouter(SignUp);