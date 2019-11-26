import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Button, Form, Modal} from "react-bootstrap";
import AuthorizationService from "../../services/authorizationService";


class LegacySignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            show: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal() {
        this.setState(prevState => ({
            show: false
        }))
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
            if (form.elements.password.value === form.elements.password2.value) {
                AuthorizationService.registrationMethod(args)
                    .then((res) => {
                        alert("register!");
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
                <Modal show={this.state.show} onHide={this.handleCloseModal} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Inavalid Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Passwords in boxes didn't match!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div className="pt-4">
                    <Form noValidate validated={this.state.validate} onSubmit={this.handleSubmit}>
                        {/*<h2 style={{width: "100%", textAlign: "center"}}*/}
                        {/*    className="pb-2">*/}
                        {/*    {t('signUp')}*/}
                        {/*</h2>*/}
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
                        <Button variant="primary" type="submit" block>
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}

const SignUp = withTranslation()(LegacySignUp);
export default SignUp;