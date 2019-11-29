import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Button, Card, Col, Form} from "react-bootstrap";
import {ModalTop} from "../../ModalWindow";
import DataPostService from "../../../services/dataPostService";

class LegacyUnbindMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            showSuccessModal: false,
            showFailedModal: false,
            failText: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose() {
        this.setState({
            showSuccessModal: false,
            showFailedModal: false
        });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const args = {
                mac_id: form.elements.macId.value.trim(),
                code: form.elements.code.value.trim(),
            };
            DataPostService.unbindMachine(args)
                .then((res) => {
                    this.setState({showSuccessModal: true})
                })
                .catch((err) => {
                    this.setState({
                        showFailedModal: true,
                        failText: err.toString()
                    })
                })
        }
        this.setState(prevState => ({
            validate: true
        }));
    }

    render() {
        const {t} = this.props;
        return (
            <>
                <ModalTop
                    headerText={t('successOp')}
                    bodyText={t('unbindMacSuccess')}
                    closeText={t('close')}
                    handleClose={this.handleModalClose}
                    show={this.state.showSuccessModal}
                />
                <ModalTop
                    headerText={t('failOp')}
                    bodyText={this.state.failText}
                    closeText={t('close')}
                    handleClose={this.handleModalClose}
                    show={this.state.showFailedModal}
                />
                <Card className="mb-3" border="warning">
                    <Card.Header>{t('unbindMachine')}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <Form noValidate validated={this.state.validate} onSubmit={this.handleSubmit}
                                  className="my-4">
                                <Form.Row>
                                    <Form.Group as={Col} controlId="macIdValidation">
                                        <Form.Label>Mac_id</Form.Label>
                                        <Form.Control
                                            required
                                            name="macId"
                                            type="text"
                                            placeholder={t('machineId')}
                                        />
                                        <Form.Control.Feedback>{t('looksGood')}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="codeValidation">
                                        <Form.Label>Code</Form.Label>
                                        <Form.Control
                                            required
                                            name="code"
                                            type="text"
                                            placeholder={t('machineCode')}
                                        />
                                        <Form.Control.Feedback>{t('looksGood')}</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Button type="submit">{t('submit')}</Button>
                            </Form>
                            <footer className="blockquote-footer">
                                {t('unbindMacDescry')}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

const UnbindMachineBlock = withTranslation()(LegacyUnbindMachine);
export default UnbindMachineBlock;