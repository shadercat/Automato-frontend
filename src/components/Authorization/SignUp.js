import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Button, Dropdown, DropdownButton, Form} from "react-bootstrap";
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
            showErrorModal: false,
            errorText: "",
            showSuccessModal: false,
            type: "owner"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closePasswordModal = this.closePasswordModal.bind(this);
        this.closeSuccessModal = this.closeSuccessModal.bind(this);
        this.linkToSignUp = this.linkToSignUp.bind(this);
        this.chooseType = this.chooseType.bind(this);
        this.closeErrorModal = this.closeErrorModal.bind(this);
    }

    static propTypes = {
        history: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    chooseType(val, e) {
        this.setState(prevState => ({
                type: val
            })
        )
    }

    closePasswordModal() {
        this.setState(prevState => ({
            show: false
        }))
    }

    closeErrorModal() {
        this.setState(prevState => ({
            showErrorModal: false
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
                name: form.elements.name.value,
                comp_description: form.elements.text.value,
                position_type: this.state.type
            };
            if (form.elements.password.value === form.elements.password2.value) {
                AuthorizationService.registrationMethod(args)
                    .then((res) => {
                        this.setState(prevState => ({
                            showSuccessModal: true
                        }));
                    })
                    .catch((err) => {
                        this.setState(prevState => ({
                            errorText: err,
                            showErrorModal: true
                        }))
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

                <ModalTop show={this.state.showErrorModal} handleClose={this.closeErrorModal}
                          headerText={t('fail')} bodyText={this.state.errorText}
                          closeText={t('close')}/>

                <ModalTopBtn show={this.state.showSuccessModal} handleClose={this.closeSuccessModal}
                             headerText={t('successReg')} bodyText={t('successRegText')}
                             closeText={t('close')} btnText={t('linkToLogin')}
                             handleBtn={this.linkToSignUp}/>


                <div className="pt-4 pb-4">
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
                        <Form.Label>{t('accountType')}</Form.Label>
                        <DropdownButton id="dropdown-variants-info" variant="outline-info" title={t(this.state.type)}
                                        style={{margin: "auto"}}>
                            <Dropdown.Item onClick={this.chooseType.bind(this, "owner")}>{t('owner')}</Dropdown.Item>
                            <Dropdown.Item
                                onClick={this.chooseType.bind(this, "company")}>{t('company')}</Dropdown.Item>
                        </DropdownButton>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>{t('addInfo')}</Form.Label>
                            <Form.Control
                                name="text"
                                as="textarea"
                                aria-label="With textarea"/>
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